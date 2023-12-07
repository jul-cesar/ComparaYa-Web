import React, { Children, useContext } from "react";
import { Products } from "../context/productsContext";
import InfoHeader from "../components/productsPage/Product/InfoHeader";
import ProductSkeleton from "../components/productsPage/Product/ProductSkeleton";
import PaginationButton from "../components/productsPage/PaginationButton";
import CardProduct from "../components/productsPage/Product/CardProduct";
import { nanoid } from "nanoid";

const ProductsLayout = ({ currentPage, setCurrentPage, children }) => {
  const {
    AllProducts,
    filteredItems,
    isSearching,
    currentCategory,
    noResults,
  } = useContext(Products);
  return (
    <div className="p-1 sm:p-5">
      <div className="flex items-center justify-center">
        <div className="flex-grow">
          <div className="p-4 lg:ml-64">
            {!noResults && (
              <InfoHeader
                currentCategory={currentCategory}
                AllProducts={AllProducts}
                filteredItems={filteredItems}
              />
            )}
            {children}
          </div>

          {!isSearching && !currentCategory && (
            <PaginationButton
              click={() => {
                setCurrentPage(currentPage + 1);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
