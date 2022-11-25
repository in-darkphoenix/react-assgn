import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import AllProducts from "./Components/AllProducts";
import ProductDetails from "./Components/ProductDetails";
import Product404 from "./Components/Product404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<Product404 />} />
      </Routes>
    </div>
  );
}

export default App;
