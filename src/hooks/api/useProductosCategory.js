import { useContext, useState, useEffect } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { ScrollToTop } from "../../utils/scrollTop";
import { Products } from "../../context/productsContext";

export const useProductosCategory = (initialCategory, curPage) => {
  const [productsCategory, setProductsCategory] = useState([]);
  const [loadingCategoryProducts, setLoadingCategoryProducts] = useState(false);
  const [errorCats, setErrorCats] = useState(false);
  const { setCurrentCategory } = useContext(SidebarContext);
  const { setLoadingProducts } = useContext(Products);

  const fetchProductsByCategory = async (category, page) => {
    if (!category) return;

    setLoadingProducts(true);
    try {
      const response = await fetch(
        `https://api-compara-ya-jul-cesars-projects.vercel.app/productos/${category.id}/${page}/8`
      );
      const fetchedCategories = await response.json();
      setCurrentCategory(category.nombre);
      setProductsCategory((prevProducts) => [
        ...prevProducts,
        ...fetchedCategories,
      ]);
    } catch (error) {
      console.error(error);
      if (error.message.includes("fetch")) {
        setErrorCats(true);
      }
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    fetchProductsByCategory(initialCategory, curPage);
  }, [initialCategory, setCurrentCategory, curPage]);

  return {
    productsCategory,
    errorCats,
    fetchProductsByCategory,
  };
};
