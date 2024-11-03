import { useState, useEffect } from "react";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(wishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    
    setModalMessage("Produit retiré de la liste de souhaits !");
    setShowModal(true);
    
    setTimeout(() => setShowModal(false), 3000);
  };

  return (
    <div className="bg-green-50 min-h-screen p-8 mt-1">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Ma Liste de Souhaits
        </h2>

        {wishlistItems.length > 0 ? (
          <ul className="space-y-3">
            {wishlistItems.map((item) => (
              <li key={item.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                <Link to={`/product/${item.id}`} className="flex-shrink-0">
                  <img src={item.image_url} alt={item.name} className="w-24 h-24 object-cover rounded-md border" />
                </Link>
                <div className="ml-4 flex-1">
                  <Link to={`/product/${item.id}`} className="text-lg font-semibold text-gray-900 hover:underline">
                    {item.name}
                  </Link>
                  <p className="text-gray-700 mt-1">{item.price} {item.currency}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="flex items-center justify-center p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition" title="Ajouter au panier">
                    <FiShoppingCart className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="flex items-center justify-center p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
                    title="Retirer de la liste de souhaits"
                  >
                    <FiTrash2 className="h-5 w-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">
            Votre liste de souhaits est vide. Ajoutez des articles pour les retrouver ici.
          </p>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700">{modalMessage}</p>
              <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-500 transition-colors"
              >
                Fermer
              </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
