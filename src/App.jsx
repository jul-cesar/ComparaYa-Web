

import "./App.css";
import ProductsPage from "./pages/ProductsPage";
import { ProductsFunction } from "./context/productsContext.jsx";
import { Route, Routes } from "react-router-dom";
import { Toaster, toast } from 'sonner'
function App() {
  
  return (
    <ProductsFunction>
        <Toaster />
    <div className="h-full w-full">
      <Routes>
        <Route path="/" element={<ProductsPage />} />
      </Routes>
    </div>
    <Toaster
     richColors   />
    </ProductsFunction>
  );
}

export default App;
