import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Wishlist from "../pages/whishlist";
import { BrowserRouter } from "react-router-dom";

// Fonction mock pour le localStorage
const mockLocalStorage = (function () {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    clear: () => { store = {}; },
  };
})();
Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

describe("Wishlist", () => {
  beforeEach(() => {
    // Nettoyer le localStorage et ajouter un article à la wishlist
    window.localStorage.clear();
    window.localStorage.setItem("wishlist", JSON.stringify([
      { id: 1, name: "Produit Test", price: 50, currency: "€", image_url: "test-url" },
    ]));
  });

  it("affiche les produits de la liste de souhaits", () => {
    render(
      <BrowserRouter>
        <Wishlist />
      </BrowserRouter>
    );

    // Vérifier que le produit est affiché
    expect(screen.getByText("Produit Test")).toBeInTheDocument();
    expect(screen.getByText("50 €")).toBeInTheDocument();
  });

  it("retire un produit de la liste de souhaits et affiche le modal", () => {
    render(
      <BrowserRouter>
        <Wishlist />
      </BrowserRouter>
    );

    // Clic sur le bouton de suppression
    const deleteButton = screen.getByTitle("Retirer de la liste de souhaits");
    fireEvent.click(deleteButton);

    // Vérification que le modal s'affiche
    expect(screen.getByText("Produit retiré de la liste de souhaits !")).toBeInTheDocument();

    // Vérification que le produit est retiré de la liste de souhaits
    expect(screen.queryByText("Produit Test")).not.toBeInTheDocument();
  });

  it("ferme le modal après un clic sur le bouton 'Fermer'", () => {
    render(
      <BrowserRouter>
        <Wishlist />
      </BrowserRouter>
    );

    // Clic sur le bouton de suppression
    const deleteButton = screen.getByTitle("Retirer de la liste de souhaits");
    fireEvent.click(deleteButton);

    // Vérification que le modal est affiché
    expect(screen.getByText("Produit retiré de la liste de souhaits !")).toBeInTheDocument();

    // Clic sur le bouton 'Fermer' dans le modal
    const closeButton = screen.getByText("Fermer");
    fireEvent.click(closeButton);

    // Vérification que le modal est fermé
    expect(screen.queryByText("Produit retiré de la liste de souhaits !")).not.toBeInTheDocument();
  });
});
