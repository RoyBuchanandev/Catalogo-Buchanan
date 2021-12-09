import "./App.css";
import NavBarComp from "./NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { CartContextProvider } from "./Components/Context/CartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <NavBarComp />
          <AppRoutes />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
