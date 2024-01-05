import React, { memo, useContext, useEffect, useState } from "react";

import Navbar from "../components/productsPage/Navbar";
import CategoriesSidebar from "../components/productsPage/Sidebar/CategoriesSidebar";
import Carrito from "../components/productsPage/Carrito/Carrito";
import ErrorModal from "../components/ErrorModal";
import ProductsLayout from "../layouts/ProductsLayout";
import ProductsGrid from "../layouts/ProductsGrid";
import { SidebarContext } from "../context/sidebarContext";
import { useProductosPaginados } from "../hooks/api/useProductosPaginados";
import { Products } from "../context/productsContext";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [isFetching, setIsFetching] = useState(false);

  const { fetchProductosPaginados } = useProductosPaginados();

  const { setCurrentCategory, noResults, query, errorCats } =
    useContext(SidebarContext);

  const { filteredItems } = useContext(Products);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    const bottomThreshold = 700;

    if (
      scrollTop + clientHeight + bottomThreshold >= scrollHeight &&
      !isFetching
    ) {
      setIsFetching(true);
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (query === "") {
      fetchProductosPaginados(currentPage).finally(() => setIsFetching(false));
    }
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <ProductsGrid Items={filteredItems} />
      </ProductsLayout>
    </div>
  );
};

export default memo(ProductsPage);
