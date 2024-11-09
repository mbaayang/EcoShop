import { render, screen, fireEvent } from "@testing-library/react";
import Products from "../pages/products";
import { BrowserRouter } from "react-router-dom";
import { CartProvider, useCart } from "../context/cartContext";
import useFetchData from "../hooks/useFetchData";

jest.mock("../hooks/useFetchData", () => jest.fn());
jest.mock("../components/cart-preview", () => () => <div data-testid="mocked-cart-preview" />);

const mockData = [
  { id: 1, name: "Déodorant", date: "2024-10-01" },
  { id: 2, name: "Shampooing", date: "2024-10-02" },
  { id: 3, name: "Crème Hydratante", date: "2024-10-03" },
];

const mockCartContextValue = {
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
  items: [],
};

describe("Products", () => {
  beforeEach(() => {
    useFetchData.mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });
  });

  const renderWithProviders = (component) =>
    render(
        <CartProvider value={mockCartContextValue}>
            <BrowserRouter>{component}</BrowserRouter>
        </CartProvider>
    );

  it("affiche les produits après le chargement", () => {
    renderWithProviders(<Products />);

    // Vérifie que les produits sont affichés
    expect(screen.getByText("Shampooing")).toBeInTheDocument();
    expect(screen.getByText("Déodorant")).toBeInTheDocument();
    expect(screen.getByText("Crème Hydratante")).toBeInTheDocument();
  });

  it("tri les produits par ordre alphabétique", async () => {
    renderWithProviders(<Products />);

    // Sélection du tri alphabétique
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "3" } });

    // Attendre que le tri soit appliqué
    await screen.findByText("Crème Hydratante");

    // Vérifie que les produits sont triés dans l'ordre alphabétique
    const productNames = screen.getAllByRole("heading").map((el) => el.textContent);
    expect(productNames).toEqual(["Catégories","Crème Hydratante", "Déodorant", "Shampooing"]);
  });

  it("tri les produits du plus récent au plus ancien", async () => {
    renderWithProviders(<Products />);

    // Sélection du tri par date
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "2" } });

    // Attendre que le tri soit appliqué
    await screen.findByText("Crème Hydratante");

    // Vérifie que les produits sont triés par date
    const productNames = screen.getAllByRole("heading").map((el) => el.textContent);
    expect(productNames).toEqual(["Catégories","Crème Hydratante", "Shampooing", "Déodorant"]);
  });

  it("affiche un message d'erreur en cas de problème de chargement", () => {
    useFetchData.mockReturnValueOnce({
      data: null,
      loading: false,
      error: "Erreur lors du chargement",
    });

    renderWithProviders(<Products />);

    // Vérifie que le message d'erreur est affiché
    expect(screen.getByText("Erreur lors du chargement des produits.")).toBeInTheDocument();
  });
});
