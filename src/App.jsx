import "./App.css";
import ProductsPage from "./pages/ProductsPage";
import { ProductsFunction } from "./context/productsContext.jsx";
import { Route, Routes } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { SidebarFunction } from "./context/sidebarContext.jsx";
import ComparationPage from "./pages/ComparationPage.jsx";
import CategoriesPage from "./pages/CategoriesPage.jsx";
import LogIn from "./components/auth/LogIn.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import SearchResultsPage from "./pages/searchResultsPage.jsx";



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
            <Route path="/categories/:categ" element={<CategoriesPage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/search/:squery" element={<SearchResultsPage />} />
          </Routes>
        </SidebarFunction>
      </div>
      <Toaster richColors />
    </ProductsFunction>
  );
}

export default App;
