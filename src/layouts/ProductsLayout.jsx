import React, { useContext } from "react";
import { Products } from "../context/productsContext";
import InfoHeader from "../components/productsPage/Product/InfoHeader";
import { SidebarContext } from "../context/sidebarContext";

const ProductsLayout = ({ children, currentItems }) => {
  const { AllProducts, filteredItems, isSearchin, loadingProducts } =
    useContext(Products);
  const { currentCategory, noResults } = useContext(SidebarContext);
  return (
    <div className="p-1 sm:p-5">
      <div className="flex items-center justify-center">
        <div className="flex-grow">
          <div className="p-2 mt-16 sm:mt-12 lg:ml-64">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
