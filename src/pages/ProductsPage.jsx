import React, { memo, useContext, useEffect, useState } from "react";

import Navbar from "../components/productsPage/Navbar";
import CategoriesSidebar from "../components/productsPage/Sidebar/CategoriesSidebar";
import Carrito from "../components/productsPage/Carrito/Carrito";
import ErrorModal from "../components/ErrorModal";
import ProductsLayout from "../layouts/ProductsLayout";
import ProductsGrid from "../layouts/ProductsGrid";
import { SidebarContext } from "../context/sidebarContext";
import { useProductosPaginados } from "../hooks/api/useProductosPaginados";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [isFetching, setIsFetching] = useState(false);

  const { fetchProductosPaginados, products } = useProductosPaginados();

  const { setCurrentCategory, noResults, query, errorCats } =
    useContext(SidebarContext);

  // const handleScroll = () => {
  //   const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  //   const bottomThreshold = 700;

  //   if (
  //     scrollTop + clientHeight + bottomThreshold >= scrollHeight &&
  //     !isFetching
  //   ) {
  //     setIsFetching(true);
  //     setCurrentPage((prev) => prev + 1);
  //   }
  // };

  useEffect(() => {
    if (query === "") {
      fetchProductosPaginados(currentPage).finally(() => setIsFetching(false));
    }
  }, [currentPage]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="flex flex-col  min-h-screen justify-center">
      <Navbar />

      <CategoriesSidebar setCurrentCategory={setCurrentCategory} />

      {errorCats && <ErrorModal message={"Error cats"} />}
      {noResults && (
        <ErrorModal
          currentPage={currentPage}
          message={`no se han encontrado resultados para "${query}"`}
        />
      )}

      <Carrito />

      <ProductsLayout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <InfiniteScroll
          loader={
            <div className="grid-cols-mobile grid sm:grid-cols-16 gap-3 sm:gap-10 content-center mt-6">
              <div className="w-full">
                <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
                  <div className="h-64 bg-gray-300"></div>
                  <div className="px-6 py-4">
                    <div className="h-4 bg-gray-300 mb-2 w-2/3"></div>
                    <div className="h-2 bg-gray-300 w-full mb-2"></div>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <div className="h-2 bg-gray-300 w-1/4 mb-2"></div>
                    <div className="h-2 bg-gray-300 w-1/2"></div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
                  <div className="h-64 bg-gray-300"></div>
                  <div className="px-6 py-4">
                    <div className="h-4 bg-gray-300 mb-2 w-2/3"></div>
                    <div className="h-2 bg-gray-300 w-full mb-2"></div>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <div className="h-2 bg-gray-300 w-1/4 mb-2"></div>
                    <div className="h-2 bg-gray-300 w-1/2"></div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
                  <div className="h-64 bg-gray-300"></div>
                  <div className="px-6 py-4">
                    <div className="h-4 bg-gray-300 mb-2 w-2/3"></div>
                    <div className="h-2 bg-gray-300 w-full mb-2"></div>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <div className="h-2 bg-gray-300 w-1/4 mb-2"></div>
                    <div className="h-2 bg-gray-300 w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          }
          next={() => {
            setCurrentPage((prevPage) => prevPage + 1);
          }}
          dataLength={products.length}
          hasMore={true}
         
        >
          <ProductsGrid Items={products} />
        </InfiniteScroll>
      </ProductsLayout>
    </div>
  );
};

export default memo(ProductsPage);
