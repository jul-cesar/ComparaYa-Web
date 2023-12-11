import { useContext } from "react";
import { Products } from "../../context/productsContext";

export const useProductosPaginados = () => {
  const { setLoadingProducts, setProducts, products, LoadingProducts } =
    useContext(Products);

  const fetchProductosPaginados = async (currentPage) => {
    setLoadingProducts(true);
    try {
      const response = await fetch(
        `http://localhost:4000/productos/${currentPage}/8`
      );
      const fetchedProducts = await response.json();
      setProducts((prevProducts) => prevProducts.concat(fetchedProducts));
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoadingProducts(false);
    }
  };

  return {
    LoadingProducts,
    products,
    fetchProductosPaginados,
  };
};
