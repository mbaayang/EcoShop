import ProductCart from "./product-cart";
import useFetchData from "../hooks/useFetchData";

export default function Sale() {
  const { data: products, loading } = useFetchData("/products.json");
  const promotionalProducts = products.filter(product => product.on_sale);

  if (loading) {
    return <p className="text-center text-2xl my-8">Chargement des produits en promotion...</p>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-green-900 mb-6">Produits en vedette</h1>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {promotionalProducts.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
