import { useContext } from "react";
import { Products } from "../../context/productsContext";
import { SidebarContext } from "../../context/sidebarContext";
import { ScrollToTop } from "../../utils/scrollTop";

export const useProductosCategory = () => {
  const { setFilteredItems, FilteredItems } = useContext(Products);
  const { setCurrentCategory, setLoadingCategoryProducts } =
    useContext(SidebarContext);

  const getProductsByCategory = async (category) => {
    setLoadingCategoryProducts(true);
    try {
      const response = await fetch(
        `http://localhost:4000/productos/categoria/${category.id}`
      );
      const fetchedCategories = await response.json();
      setCurrentCategory(category.nombre);
      setFilteredItems(fetchedCategories);
      ScrollToTop();
    } catch (error) {
      console.error(error);
      if (error.message.includes("fetch")) {
        setErrorCats(true);
      }
    } finally {
      setLoadingCategoryProducts(false);
    }
  };
  return {
    getProductsByCategory,
    FilteredItems,
  };
};
