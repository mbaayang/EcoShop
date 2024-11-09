import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Cart from "../pages/cart";
import { CartProvider, useCart } from "../context/cartContext";

// Mock du contexte du panier
jest.mock("../context/cartContext", () => ({
  ...jest.requireActual("../context/cartContext"),
  useCart: jest.fn(),
}));

// Simulez des données de panier
const mockCart = {
  items: [
    { id: 1, name: "Produit 1", price: 20, quantity: 2, currency: "FCFA", image_url: "test-url" },
    { id: 2, name: "Produit 2", price: 15, quantity: 1, currency: "FCFA", image_url: "test-url-2" },
  ],
  total: 55,
};

// Fonctions mock pour les actions du panier
const mockRemoveFromCart = jest.fn();
const mockUpdateQuantity = jest.fn();

// Test du composant `Cart`
describe("Cart", () => {
  beforeEach(() => {
    // Mock des valeurs retournées par `useCart`
    useCart.mockReturnValue({
      cart: mockCart,
      removeFromCart: mockRemoveFromCart,
      updateQuantity: mockUpdateQuantity,
    });

    render(
      <CartProvider>
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </CartProvider>
    );
  });

  it("affiche les produits du panier", () => {
    expect(screen.getByText("Produit 1")).toBeInTheDocument();
    expect(screen.getByText("Produit 2")).toBeInTheDocument();
  });

  it("affiche les prix corrects pour chaque produit", () => {
    expect(screen.getAllByText("20 FCFA").length).toBeGreaterThan(0);
  });  

  it("calcule et affiche le sous-total correctement", () => {
    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getAllByText("55 FCFA").length).toBeGreaterThan(0);
  });
  
  it("supprime un produit du panier lorsque le bouton est cliqué", () => {
    const deleteButtons = screen.getAllByTitle("Supprimer");
    fireEvent.click(deleteButtons[0]);
    expect(mockRemoveFromCart).toHaveBeenCalledWith(1);
  });

  it("met à jour la quantité du produit lorsque l'input change", () => {
    const quantityInputs = screen.getAllByRole("spinbutton");
    fireEvent.change(quantityInputs[0], { target: { value: "3" } });
    expect(mockUpdateQuantity).toHaveBeenCalledWith(1, 3);
  });
});
