import React from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="p-8 lg:mx-14">
      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="py-3 px-4"> </th>
              <th className="py-3 px-4"> </th>
              <th className="py-3 px-4 text-left">Produit</th>
              <th className="py-3 px-4  text-left">Prix</th>
              <th className="py-3 px-4  text-left">Quantité</th>
              <th className="py-3 px-4  text-left">Sous-Total</th>
            </tr>
          </thead>
          <tbody className="bg-green-50">
            <tr className="border-b">
              <td className="py-4 px-4">
                <button className="bg-green-700 rounded-full text-white hover:bg-orange-400" title="Supprimer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </td>
              <td className="py-4 px-4">
                <img
                  src="https://example.com/image1.jpg"
                  alt="Savon"
                  className="w-12 h-12 rounded"
                />
              </td>
              <td className="py-4 px-4">Savon de marseille</td>
              <td className="py-4 px-4">400CFA</td>
              <td className="py-4 px-4">
                <input
                  type="number"
                  defaultValue="1"
                  min="1"
                  className="w-16 text-center border border-gray-300 rounded"
                />
              </td>
              <td className="py-4 px-4">400CFA</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Promo and Actions */}
      <div className="flex flex-wrap justify-between items-center mt-6">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Code promo"
            className="p-2 border border-gray-300 rounded w-full sm:w-auto"
          />
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto">
            APPLIQUER LE CODE PROMO
          </button>
        </div>
        <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 mt-4 sm:mt-2">
          <Link to="/products"> CONTINUER MES ACHATS </Link>
        </button>
      </div>

      {/* Total Summary */}
      <div className="flex justify-end mt-8">
        <div className="w-full md:w-1/2 max-w-sm bg-green-50 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold">Total panier</h3>
          <div className="mt-4">
            <div className="flex justify-between py-2">
              <span>Sous-Total</span>
              <span>1,900CFA</span>
            </div>
            <div className="flex justify-between py-2 border-t font-semibold">
              <span>Total</span>
              <span>1,900CFA</span>
            </div>
          </div>
          <button className="w-full mt-4 bg-orange-400 text-white py-3 rounded hover:bg-orange-500">
            VALIDER LA COMMANDE
          </button>
        </div>
      </div>
    </div>
  );
}
