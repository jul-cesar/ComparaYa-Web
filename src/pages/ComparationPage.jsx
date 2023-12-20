import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../context/productsContext";
import ProductsGrid from "../layouts/ProductsGrid";

import { useProductos } from "../hooks/api/useProductos";
import { useComparations } from "../hooks/api/useComparations";
import Navbar from "../components/productsPage/Navbar";

const ComparationPage = () => {
  const { idf } = useParams();
  const [loading, setLoading] = useState(true);

  const { setComparationItems, ComparationItems, setAllProducts, AllProducts } =
    useContext(Products);

  const { getAllProductos } = useProductos();
  const { getComparations } = useComparations();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await getAllProductos();
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setAllProducts]);

  const parsedIdf = parseInt(idf, 10);
  const product = AllProducts.find((p) => p.id === parsedIdf);

  useEffect(() => {
    const fetchComparation = async () => {
      try {
        await getComparations(product, setComparationItems);
      } catch (error) {
        console.error("Error fetching comparations:", error);
      }
    };

    if (product) {
      fetchComparation();
    }
  }, [product, setComparationItems]);

  if (ComparationItems.length < 1) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-4">
        <div
          className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        />

        <div className="px-3 py-1 text-lg font-medium leading-none text-center bg-gray-700-200  animate-pulse">
          Buscando...
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />s
      <div className="p-1 sm:p-5">
        <h1 className="p-10 text-lg">Iguales</h1>

        <ProductsGrid Items={ComparationItems.mostSimilarProducts} />

        <h1 className="p-10 text-lg">Parecidos</h1>

        <ProductsGrid Items={ComparationItems.alikeProducts} />
      </div>
    </>
  );
};

export default ComparationPage;
