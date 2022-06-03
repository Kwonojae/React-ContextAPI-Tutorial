import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./CartContext";
import Checkout from "./components/Checkout";
import Nav from "./components/Nav";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
