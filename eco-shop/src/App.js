import FooterComponent from "./components/footer";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
    <Outlet />
    <FooterComponent/>
    </>
  );
}

export default App;
