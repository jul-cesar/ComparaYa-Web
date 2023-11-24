import React, { useContext, useEffect, useState } from "react";
import { Products } from "../context/productsContext";
import { getProductos } from "../api/productsFetching";
import CardProduct from "../components/CardProduct";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lottie from "lottie-react";
import load from "../media/load .json";
import { nanoid } from "nanoid";
import PaginationButton from "../components/PaginationButton";
import BackTopButton from "../components/backTopButton";
import CategoriesSidebar from "../components/categoriesSidebar";
import InfoHeader from "../components/infoHeader";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAtTop, setIsAtTop] = useState(true);
  const [currentCategory, setCurrentCategory] = useState();

  const {
    setProducts,
    loadingProducts,
    AllProducts,
    setLoadingProducts,
    filteredItems,
    isSearching,
  } = useContext(Products);

  useEffect(() => {
    getProductos(setProducts, setLoadingProducts, currentPage);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen bg-wip">
      <div>
        <Navbar />

        <div className="flex">
          <CategoriesSidebar setCurrentCategory={setCurrentCategory} />

          <div className="p-24 flex-grow">
            <div className="fixed bottom-5 left-10 z-50">
              {" "}
              {!isAtTop && <BackTopButton />}
            </div>

            <InfoHeader
              currentCategory={currentCategory}
              AllProducts={AllProducts}
              filteredItems={filteredItems}
            />
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

            {!loadingProducts  ? (
              <div className="flex items-center justify-center">
                {(!isSearching && !currentCategory) && (
                  <PaginationButton
                    click={() => {
                      setCurrentPage(currentPage + 1);
                    }}
                  />
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Lottie animationData={load} className="w-32 h-32 mt-20 " />
              </div>
            )}
          </div>
        </div>
      </div>
      {!loadingProducts && <Footer />}
    </div>
  );
};

export default ProductsPage;
