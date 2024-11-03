import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

export default function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const { data: products, loading, error } = useFetchData("/products.json");
  const product = products.find((item) => item.id === parseInt(id));

  if (loading) return <p className="text-center text-2xl my-8">Chargement du produit...</p>;
  if (error) return <p>{error}</p>;

  if (!product) {
    return <p className="text-center text-2xl my-8">Produit non trouvé !</p>;
  }

  return (
    <div className="bg-green-50 flex flex-col items-center w-full mt-1 py-8 px-4 sm:px-6 lg:px-8 lg:py-16">
      <div className="w-4/5 lg:flex lg:items-start lg:gap-8">
        {/* Product Image */}
        <div className="lg:w-1/2">
          <img
            src={product.image_url} 
            alt={product.name}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-xl font-semibold text-green-700 mt-2">
            {product.price} {product.currency}
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
            onClick={() => console.log("Ajouté au panier")}
            className="mt-6 flex w-full items-center justify-center px-6 py-3 text-white font-semibold bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Ajouter au panier
          </button>

          {/* Additional Details */}
          <div className="mt-10 border-t pt-6">
            <h2 className="text-lg font-bold text-gray-900">Détails du produit</h2>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              <li>Catégorie : {product.category}</li>
              <li>Taille : {product.size} {product.unit}</li>
              <li>SKU : {product.sku}</li>
              <li>Stock : {product.stock_quantity > 0 ? "En stock" : "Rupture"}</li>
              <li>Ingrédients : {product.ingrédients.join(", ")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
