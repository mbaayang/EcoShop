import { useState } from "react";

export default function ProductPage({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8 lg:py-16">
      <div className="lg:flex lg:items-start lg:gap-8">
        {/* Product Image */}
        <div className="lg:w-1/2">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="flex mt-4 space-x-2">
            {product.additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg border border-gray-200 hover:border-green-500"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-xl font-semibold text-green-700 mt-2">
            {product.price} €
          </p>
          <p className="mt-4 text-gray-700">{product.description}</p>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center space-x-4">
            <span className="text-gray-700">Quantité</span>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 px-2 py-1 border border-gray-300 rounded-md focus:border-green-500 focus:ring focus:ring-green-300"
            />
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => console.log("Added to cart")}
            className="mt-6 flex w-full items-center justify-center px-6 py-3 text-white font-semibold bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Ajouter au panier
          </button>

          {/* Additional Details */}
          <div className="mt-10 border-t pt-6">
            <h2 className="text-lg font-bold text-gray-900">Détails du produit</h2>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              <li>Catégorie : {product.category}</li>
              <li>État : {product.condition}</li>
              <li>Stock : {product.stock > 0 ? "En stock" : "Rupture"}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
