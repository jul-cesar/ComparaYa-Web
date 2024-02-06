import { Products } from "../../context/productsContext";

export const useProductosPaginados = () => {
  const fetchProductosPaginados = async (currentPage) => {
    try {
      const response = await fetch(
        `https://api-compara-ya-jul-cesars-projects.vercel.app/productos/${currentPage}/8`
      );
      const fetchedProducts = await response.json();
      return fetchedProducts;
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  return {
    fetchProductosPaginados,
  };
};
