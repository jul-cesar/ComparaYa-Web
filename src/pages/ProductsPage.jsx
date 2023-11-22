import React, { useContext, useEffect, useState } from "react";
import { Products } from "../context/productsContext";
import { getAllProductos, getProductos } from "../api/productsFetching";
import CardProduct from "../components/CardProduct";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lottie from "lottie-react";
import load from "../media/load .json";
import { nanoid } from "nanoid";
import PaginationButton from "../components/PaginationButton";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    setProducts,
    loadingProducts,
    setLoadingProducts,
    filteredItems,
    setAllProducts,
  } = useContext(Products);

  useEffect(() => {
    getProductos(setProducts, setLoadingProducts, currentPage);
  }, [currentPage]);

  useEffect(() => {
    getAllProductos(setAllProducts);
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen bg-wip">
      <div>
        <Navbar />
        <div className="p-20">
          <h1 className="text-center font-bold text-black text-3xl mt-10 mb-10">
            Productos
          </h1>

          <ul className="grid grid-cols-16 gap-10 content-center">
            {filteredItems.map((product, index) => {
              return (
                <CardProduct
                  key={nanoid()}
                  img={product.imagen_url}
                  nombre={product.nombre}
                  precio_exito={product.precio_exito}
                  precio_olim={product.precio_olim}
                  precio_d1={product.precio_d1}
                />
              );
            })}
          </ul>

          {!loadingProducts ? (
            <div className="flex items-center justify-center">
              <PaginationButton
                click={() => {
                  setCurrentPage(currentPage + 1);
                }}
              />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Lottie animationData={load} className="w-32 h-32 mt-20 " />
            </div>
          )}
        </div>
      </div>
      {!loadingProducts && <Footer />}
    </div>
  );
};

export default ProductsPage;
