

import "./App.css";
import ProductsPage from "./pages/ProductsPage";
import { ProductsFunction } from "./context/productsContext.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <ProductsFunction>
    <div className="h-full w-full">
      <Routes>
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </div>
    </ProductsFunction>
  );
}

export default App;
