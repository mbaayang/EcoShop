import CartPreview from "../components/cart-preview";
import CategorySidebar from "../components/categorySidebar";
import ProductCard from "../components/product-card";
import useFetchData from "../hooks/useFetchData";

export default function Products() {
  const { data: products, loading, error } = useFetchData("/products.json");

  if (loading) {
    return <p className="text-center text-2xl my-8">Chargement des produits...</p>;
  }
  return (
    <div className="bg-green-50 flex-1 mt-1">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-14 gap-4">
        <div className="order-2 lg:order-1 lg:col-span-1 space-y-2 my-14">
          <CartPreview />
          <CategorySidebar />
        </div>

        <div className="order-1 lg:order-2 lg:col-span-2 mt-14">
          <div className="lg:w-1/3 w-1/2 ml-auto">
          <select
              id="tri"
              name="tri"
              className="mt-1 block w-full py-2 text-base border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:ring-0 focus:border-green-600 sm:text-sm"
            >
              <option value="1" selected>Tri par défaut</option>
              <option value="2">Trie du plus récent au plus ancien</option>
              <option value="3">Tri par ordre alphabétique</option>
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