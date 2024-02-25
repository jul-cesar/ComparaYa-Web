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
import SearchResultsPage from "./pages/SearchResultsPage.jsx";
import { AuthFunction } from "./context/authContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import NotFound from "./components/NotFound";

function App() {
  return (
    <AuthFunction>
      <SidebarFunction>
        <ProductsFunction>
          <Toaster />
          <div className="h-full w-full">
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route
                path="/product/comparation/:idf"
                element={<ComparationPage />}
              />
              <Route
                path="/categories/:categ"

                element={
                  <CategoriesPage />
                }

              />
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/search/" element={<SearchResultsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Toaster richColors />
        </ProductsFunction>
      </SidebarFunction>
    </AuthFunction>
  );
}

export default App;
