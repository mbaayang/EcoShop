import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function CartPreview() {
  const { cart, removeFromCart} = useCart();

  return (
    <div className="bg-white shadow py-4 px-6">
      <h2 className="text-2xl font-bold text-green-700 my-4">Panier</h2>
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {/* Cart Item */}
            {cart.items.map((item) => (
            <li key={item.id} className="flex justify-between py-2">
              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex items-center">
                <div className="font-medium text-gray-900">
                  <h3>
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                  </h3>
                  <p className="text-gray-500">
                    {item.quantity} x <span className="font-bold text-green-700">{item.price} {item.currency}</span>{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => removeFromCart(item.id)}
                  type="button"
                  className="font-medium text-white bg-orange-400 hover:bg-green-600 rounded-full"
                >
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
              </div>
            </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t mt-10 py-3 px-6">
        <div className="flex justify-between text-base font-medium text-gray-900 my-4">
          <p>Sous total: </p>
          <p className="text-green-700 font-bold">{cart.total} {cart.items[0]?.currency}</p>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <button className="rounded bg-green-500 px-4 py-2 text-white shadow-sm hover:bg-orange-400">
            <Link to="/card"> Voir le panier </Link>
          </button>
          <button className="rounded bg-green-500 px-3 py-2 text-white shadow-sm hover:bg-orange-400">
            Commander
          </button>
        </div>
      </div>
    </div>
  );
}
