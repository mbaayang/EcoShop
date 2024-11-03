import FooterComponent from "./components/footer";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import  { WishlistProvider } from "./context/wishlistContext";

function App() {
  return (
    <WishlistProvider>
      <Header />
      <Outlet />
      <FooterComponent/>
    </WishlistProvider>
  );
}

export default App;
