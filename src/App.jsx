import "./App.css";
import ProductsPage from "./pages/ProductsPage";
import { ProductsFunction } from "./context/productsContext.jsx";
import { Route, Routes } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { SidebarFunction } from "./context/sidebarContext.jsx";
import ComparationPage from "./pages/ComparationPage.jsx";

function App() {
  return (
    <ProductsFunction>
      <Toaster />
      <div className="h-full w-full">
        <SidebarFunction>
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route
              path="/product/comparation/:idf"
              element={<ComparationPage />}
            />
          </Routes>
        </SidebarFunction>
      </div>
      <Toaster richColors />
    </ProductsFunction>
  );
}

export default App;
