import { useContext, useEffect } from "react";
import { Products } from "../../context/productsContext";

export const useProductos = () => {
  const { setAllProducts, AllProducts } = useContext(Products);

  const getAllProductos = async () => {
    try {
      const response = await fetch(`http://localhost:4000/productos`);
      const fetchedProducts = await response.json();
      setAllProducts(fetchedProducts);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      getAllProductos();
    };
    fetchProducts();
  }, [setAllProducts]);

  return {
    getAllProductos,
    AllProducts,
  };
};
