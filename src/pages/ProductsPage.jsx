import React, { memo, useContext, useEffect, useState } from "react";
import { Products } from "../context/productsContext";
import { getProductos } from "../api/productsFetching";
import CardProduct from "../components/productsPage/Product/CardProduct";
import Navbar from "../components/productsPage/Navbar";

import { nanoid } from "nanoid";
import PaginationButton from "../components/productsPage/PaginationButton";

import CategoriesSidebar from "../components/productsPage/Sidebar/CategoriesSidebar";
import InfoHeader from "../components/productsPage/Product/InfoHeader";
import Carrito from "../components/productsPage/Carrito/Carrito";

import ProductSkeleton from "../components/productsPage/Product/ProductSkeleton";
import ErrorModal from "../components/ErrorModal";
import ProductsLayout from "../layouts/ProductsLayout";
import ProductsGrid from "../layouts/ProductsGrid";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    setProducts,
    AllProducts,
    setLoadingProducts,
    loadingProducts,
    filteredItems,
    isSearching,
    setCurrentCategory,
    currentCategory,
    noResults,
    query,
    errorCats,
    loadingCategoryProducts,
  } = useContext(Products);

  useEffect(() => {
    getProductos(setProducts, setLoadingProducts, currentPage);
  }, [currentPage]);

  return (
    <div className="flex flex-col  min-h-screen justify-center dark:bg-gray-800 ">
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
      <ProductsLayout  currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <ProductsGrid Items={filteredItems}/>
      </ProductsLayout>
        

    </div>
  );
};

export default memo(ProductsPage);
