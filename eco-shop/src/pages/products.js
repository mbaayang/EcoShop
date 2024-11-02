import { useState } from "react";
import CardPreview from "../components/card-preview";
import CategorySidebar from "../components/categorySidebar";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "350 FCFA",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "350 FCFA",
    color: "Black",
  },
  // More products...
];

export default function Products() {
  return (
    <div className="bg-green-50 flex-1 mt-1">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-14 gap-4">
        <div className="order-2 lg:order-1 lg:col-span-1 space-y-2 my-14">
          <CardPreview />
          <CategorySidebar />
        </div>

        <div className="order-1 lg:order-2 lg:col-span-2 mt-14">
          <div className="w-1/3 ml-auto">
            <select
              id="location"
              name="location"
              className="mt-1 block w-full py-2 text-base border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-green-600 sm:text-sm"
            >
              <option>Trie du plus récent au plus ancien</option>
              <option selected>Tri par défaut</option>
              <option>Tri par ordre alphabétique</option>
            </select>
          </div>
          <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="group relative">
      {/* Lien autour de l'image */}
      <a
        href={product.href}
        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-green-50 lg:aspect-none lg:h-72 relative block"
      >
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </a>
      {/* Bouton wishlist */}
      <button
        onClick={toggleWishlist}
        className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-full p-2 text-orange-300 hover:text-orange-400 transition-colors z-10"
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
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
      <button className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-orange-400 transition-colors">
        Ajouter au panier
      </button>
    </div>
  );
};
