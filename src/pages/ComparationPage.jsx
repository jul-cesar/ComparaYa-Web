import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../context/productsContext";
import ProductsGrid from "../layouts/ProductsGrid";
import { nanoid } from "nanoid";
import { useProductos } from "../hooks/api/useProductos";
import { useComparations } from "../hooks/api/useComparations";
import ProductsLayout from "../layouts/ProductsLayout";

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
      <div className="flex items-center justify-center w-screen h-screen">
        <div
          className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-center">
        {ComparationItems.mostSimilarProducts?.map((p) => (
          <ProductsGrid key={"comp" + p.id} Items={[p]} />
        ))}
      </div>

      <h1 className="p-10 text-lg">Iguales</h1>
      <div className="flex items-center justify-center">
        {ComparationItems.alikeProducts?.map((p) => (
          <ProductsGrid key={p.id} Items={[p]} />
        ))}
      </div>
    </>
  );
};

export default ComparationPage;
