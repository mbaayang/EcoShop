import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsWishlisted(wishlist.some((item) => item.id === product.id));
  }, [product.id]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isWishlisted) {
      // Remove item from wishlist
      const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setIsWishlisted(false);
    } else {
      // Add item to wishlist
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setIsWishlisted(true);
    }
  };

  return (
    <div className="group relative">
      <Link
        to={`/product/${product.id}`}
        className="shadow aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-green-50 lg:aspect-none lg:h-72 relative block"
      >
        <img
          alt={product.name}
          src={product.image_url}
          className="h-60 w-60 object-cover object-center lg:h-full lg:w-full"
        />
      </Link>
      <button
        onClick={toggleWishlist}
        className="absolute top-2 right-2 bg-green-50 bg-opacity-75 rounded-full p-2 text-orange-300 hover:text-orange-400 transition-colors z-10"
      >
        {isWishlisted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4 lg:w-6 lg:h-6 text-orange-400"
          >
            <path
              fillRule="evenodd"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 lg:w-6 lg:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.682l1.318-1.364a4.5 4.5 0 016.364 6.364l-7.071 7.071a.25.25 0 01-.354 0l-7.071-7.071a4.5 4.5 0 010-6.364z"
            />
          </svg>
        )}
      </button>
      <div className="mt-4 space-y-2">
        <h3 className="text-sm text-gray-700">{product.name}</h3>
        <p className="text-sm font-bold text-green-700">
          {product.price} {product.currency}
        </p>
      </div>
      <button className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-orange-400 transition-colors">
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductCart;
