import { Products } from "../../context/productsContext";

export const useProductosPaginados = () => {
  const fetchProductosPaginados = async (currentPage) => {
    console.log(currentPage)
    try {
      const response = await fetch(
        `https://api-compara-ya-jul-cesars-projects.vercel.app/productos/pag?page=${currentPage}&limit=24`
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
