import React, { memo, useContext, useEffect, useState } from "react";
import { Products } from "../context/productsContext";
import { getProductos } from "../api/productsFetching";
import Navbar from "../components/productsPage/Navbar";
import CategoriesSidebar from "../components/productsPage/Sidebar/CategoriesSidebar";
import Carrito from "../components/productsPage/Carrito/Carrito";
import ErrorModal from "../components/ErrorModal";
import ProductsLayout from "../layouts/ProductsLayout";
import ProductsGrid from "../layouts/ProductsGrid";
import { SidebarContext } from "../context/sidebarContext";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { setProducts, setLoadingProducts, filteredItems } =
    useContext(Products);

  const { setCurrentCategory, noResults, query, errorCats } =
    useContext(SidebarContext);

  useEffect(() => {
    getProductos(setProducts, setLoadingProducts, currentPage);
  }, [currentPage]);

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
