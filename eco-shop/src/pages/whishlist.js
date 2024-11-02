import { FiShoppingCart, FiTrash2 } from "react-icons/fi";

const wishlistItems = [
  {
    id: 1,
    name: "Huile essentielle de lavande",
    price: "1500 FCFA",
    imageSrc: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Savon artisanal bio",
    price: "850 FCFA",
    imageSrc: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Soin hydratant visage",
    price: "2500 FCFA",
    imageSrc: "https://via.placeholder.com/150",
  },
];

export default function Whishlist() {
  return (
    <div className="bg-green-50 min-h-screen p-8 mt-1">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Ma Liste de Souhaits
        </h2>

        {wishlistItems.length > 0 ? (
          <ul className="space-y-3">
            {wishlistItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={item.imageSrc}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 mt-1">{item.price}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="flex items-center justify-center p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                    title="Ajouter au panier"
                  >
                    <FiShoppingCart className="h-5 w-5" />
                  </button>
                  <button
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
            Votre liste de souhaits est vide. Ajoutez des articles pour les
            retrouver ici.
          </p>
        )}
      </div>
    </div>
  );
}
