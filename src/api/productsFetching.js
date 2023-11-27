// productsFetching.js
export const getProductos = async (
  setProducts,
  setLoadingProducts,
  currentPage
) => {
  setLoadingProducts(true);
  try {
    const response = await fetch(
      `https://api-compara-ya-git-main-jul-cesars-projects.vercel.app/productos/${currentPage}/16`
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
    const response = await fetch(`https://api-compara-ya-git-main-jul-cesars-projects.vercel.app/productos/`);
    const fetchedProducts = await response.json();
    setAllProducts(fetchedProducts);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};

export const getCategories = async (setCategories) => {
  try {
    const response = await fetch(`https://api-compara-ya-git-main-jul-cesars-projects.vercel.app/categorias`);
    const fetchedCategories = await response.json();
    setCategories(fetchedCategories);
  } catch (error) {
    console.error("Failed to fetch cats:", error);
  }
};

export const getProductsByCategory = async (setFilteredItems, category) => {
  try {
    const response = await fetch(
      `https://api-compara-ya-git-main-jul-cesars-projects.vercel.app/productos/categoria/${category}`
    );
    const fetchedCategories = await response.json();
    setFilteredItems(fetchedCategories);
  } catch (error) {
    console.error("Failed to fetch cats:", error);
  }
};
