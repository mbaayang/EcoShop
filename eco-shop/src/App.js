import FooterComponent from "./components/footer";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import  { WishlistProvider } from "./context/wishlistContext";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <Header />
        <Outlet />
        <FooterComponent/>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
