import React, { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Products } from "../context/productsContext";
import ProductsGrid from "../layouts/ProductsGrid";
import { useProductos } from "../hooks/api/useProductos";
import { useComparations } from "../hooks/api/useComparations";
import Navbar from "../components/productsPage/Navbar";
import LoaderComparationPage from "../components/LoaderComparationPage";
import CategoriesSidebar from "../components/productsPage/Sidebar/CategoriesSidebar";

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
    return <LoaderComparationPage />;
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
          className="h-8 w-8 mt-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <div>
          <div>
            <h1 className="text-lg m-4">Productos Similares:</h1>
            {ComparationItems.mostSimilarProducts.slice(1).length > 0 ? (
              <ProductsGrid
                Items={ComparationItems.mostSimilarProducts.slice(1)}
              />
            ) : (
              <h1 className="text-center text-sm text-black">
                No se encontraron productos similares
              </h1>
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
