import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Products } from "../context/productsContext";
import ProductsGrid from "../layouts/ProductsGrid";
import { useProductos } from "../hooks/api/useProductos";
import { useComparations } from "../hooks/api/useComparations";
import Navbar from "../components/productsPage/Navbar";
import CardProduct from "../components/productsPage/Product/CardProduct";
import { nanoid } from "nanoid";

const ComparationPage = () => {
  const { idf } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
      <Navbar />
      <div className="p-3">
      <svg
       onClick={() => navigate(-1)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8 mt-16">
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

        <div>
          <div>
            <h1 className="text-lg m-4">Productos Similares:</h1>
            {ComparationItems.mostSimilarProducts.slice(1).length > 0 ? (
              <ProductsGrid
                Items={ComparationItems.mostSimilarProducts.slice(1)}
              />
            ) : (
              <h1 className="text-center text-sm text-black">No se encontraron productos similares</h1>
            )}
          </div>
        </div>

        <h1 className="text-lg m-4">También te puede interesar:</h1>
        <ProductsGrid Items={ComparationItems.alikeProducts} />
      </div>
    </>
  );
};

export default ComparationPage;
