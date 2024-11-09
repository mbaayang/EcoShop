import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/cartContext";
import userProfile from "../assets/user-profile.png";
import logo from "../assets/EcoShop_logo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();

  const { cart } = useCart();

  const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left part */}
          <div className="flex">
            {/* Mobile menu button */}
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img
                  className="block lg:hidden h-28 w-auto"
                  src={logo}
                  alt="logo"
                />
              </Link>
              <Link to="/">
                <img
                  className="hidden lg:block h-40 w-auto"
                  src={logo}
                  alt="Workflow"
                />
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/"
                className={`${
                  location.pathname === "/"
                    ? "border-green-700 text-green-700 font-semibold"
                    : "border-transparent text-green-600 hover:border-orange-400 hover:text-orange-400"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                {" "}
                Accueil{" "}
              </Link>
              <Link
                to="/products"
                className={`${
                  location.pathname === "/products"
                    ? "border-green-700 text-green-700 font-semibold"
                    : "border-transparent text-green-600 hover:border-orange-400 hover:text-orange-400"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                {" "}
                Nos Produits{" "}
              </Link>
              <Link
                to="/contact"
                className={`${
                  location.pathname === "/contact"
                    ? "border-green-700 text-green-700 font-semibold"
                    : "border-transparent text-green-600 hover:border-orange-400 hover:text-orange-400"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                {" "}
                Contacts{" "}
              </Link>
            </div>
          </div>
          {/* Right part */}
          <div className="flex items-center">
            <div className="flex-shrink-0 space-x-3">
              {/* Cart button */}
              <button
                type="button"
                title="Panier"
                className="relative bg-green-50 p-1 rounded-full text-green-700 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
              >
                <Link to="/card">
                  <span className="sr-only">Panier</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  {/* Badge */}
                  <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center w-5 h-5 px-1 py-1 text-[10px] font-bold leading-none text-white bg-orange-400 rounded-full">
                    {itemCount}
                  </span>
                </Link>
              </button>
              {/* WishList button */}
              <button
                type="button"
                title="Liste d'envie"
                className="bg-green-50 p-1 rounded-full text-green-700 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
              >
                <Link to="/wishlist">
                <span className="sr-only">Liste d'envie</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                </Link>
              </button>
            </div>
            <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
              {/* User Profile dropdown */}
              <div className="ml-3 relative z-20">
                <button
                  onClick={toggleUserMenu}
                  type="button"
                  className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
                  id="user-menu-button"
                >
                  <span className="sr-only">Open user menu</span>
                  <img className="h-12 w-12 rounded-full" src={userProfile} />
                </button>

                {isUserMenuOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-green-700 hover:bg-green-50"
                      role="menuitem"
                    >
                      Mon compte
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-green-700 hover:bg-green-50"
                      role="menuitem"
                    >
                      Mes commandes
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-green-700 hover:bg-green-50"
                      role="menuitem"
                    >
                      Se deconnecter
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Fond noir transparent */}
          <div
            className="fixed inset-0 bg-black opacity-50 top-16"
            onClick={closeMobileMenu}
          ></div>

          {/* Menu coulissant */}
          <div className="absolute top-16 left-0 bg-white shadow-xl h-full transform transition-transform duration-300 ease-in-out translate-x-0">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`${
                  location.pathname === "/"
                    ? "bg-green-50 border-green-700 text-green-700 font-semibold"
                    : "border-transparent text-green-600"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6`}
              >
                Accueil
              </Link>
              <Link
                to="/products"
                onClick={closeMobileMenu}
                className={`${
                  location.pathname === "/products"
                    ? "bg-green-50 border-green-700 text-green-700 font-semibold"
                    : "border-transparent text-green-600"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6`}
              >
                Nos Produits
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`${
                  location.pathname === "/contact"
                    ? "bg-green-50 border-green-700 text-green-700 font-semibold"
                    : "border-transparent text-green-600"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6`}
              >
                Contacts
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4 sm:px-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={userProfile}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Fatou Ndiaye
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    ndiayefatou@example.com
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-green-700 hover:bg-green-50 sm:px-6"
                >
                  Mon compte
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-green-700 hover:bg-green-50 sm:px-6"
                >
                  Mes commandes
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-green-700 hover:bg-green-50 sm:px-6"
                >
                  Se déconnecter
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
