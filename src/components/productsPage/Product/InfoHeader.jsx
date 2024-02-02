import React from "react";

const InfoHeader = ({ currentCategory, AllProducts, currentItems }) => {
  return (
    <div className="flex flex-row pt-1 pb-2 sm:p-4 border-b-2 justify-between items-center border-gray-800 shadow-sm mt-12 mb-6 mx-2 sm:flex  sm:justify-between">
      <div className="sm:mb-0">
        <p className="text-sm font-semibold text-gray-800 sm:text-lg">
          Categoria:{" "}
          <span className="text-blue-500" id="category-name">
            {!currentCategory ? "TODOS" : currentCategory.toUpperCase()}
          </span>
        </p>
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-800 sm:text-lg">
          Cantidad:{" "}
          <span className="text-blue-500" id="product-count text-xs">
            {!currentCategory ? AllProducts.length : currentItems}
          </span>
        </p>
      </div>
    </div>
  );
};

export default InfoHeader;
