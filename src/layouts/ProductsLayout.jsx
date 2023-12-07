import React, { useContext } from "react";
import { Products } from "../context/productsContext";
import InfoHeader from "../components/productsPage/Product/InfoHeader";
import PaginationButton from "../components/productsPage/PaginationButton";
import { SidebarContext } from "../context/sidebarContext";

const ProductsLayout = ({ currentPage, setCurrentPage, children }) => {
  const { AllProducts, filteredItems, isSearching } = useContext(Products);
  const { currentCategory, noResults } = useContext(SidebarContext);
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
