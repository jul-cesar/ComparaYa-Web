import { ScrollToTop } from "../utils/scrollTop";

// productsFetching.js
export const getProductos = async (
  setProducts,
  setLoadingProducts,
  currentPage
) => {
  setLoadingProducts(true);

  try {
    const response = await fetch(
      `http://localhost:4000/productos/${currentPage}/8`
    );
    const fetchedProducts = await response.json();
    setProducts((PrevProducts) => PrevProducts.concat(fetchedProducts));
  } catch (error) {
    console.error("Failed to fetch products:", error);
  } finally {
    setLoadingProducts(false);
  }
};

export const getAllProductos = async (setAllProducts) => {
  try {
    const response = await fetch(`http://localhost:4000/productos`);
    const fetchedProducts = await response.json();
    setAllProducts(fetchedProducts);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};

export const getCategories = async (setCategories) => {
  try {
    const response = await fetch(`http://localhost:4000/categorias`);
    const fetchedCategories = await response.json();
    setCategories(fetchedCategories);
  } catch (error) {
    console.error("Failed to fetch cats:", error);
  }
};

export const getProductsByCategory = async (
  setFilteredItems,
  category,
  setLoadingCategoryProducts,
  setErrorCats,
  setCurrentCategory
) => {
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
