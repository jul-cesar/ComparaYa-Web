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
    const response = await fetch(
      `https://api-compara-ya-git-main-jul-cesars-projects.vercel.app/productos/`
    );
    const fetchedProducts = await response.json();
    setAllProducts(fetchedProducts);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
};
