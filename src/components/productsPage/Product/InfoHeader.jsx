import React from "react";

const InfoHeader = ({ currentCategory, AllProducts, filteredItems }) => {
  return (
    <div className="flex flex-row pt-2 pb-2 sm:p-4 border-b-2 justify-between items-center border-gray-800 dark:border-white shadow-sm mt-14 mb-6 mx-2 sm:flex  sm:justify-between">
      <div className="sm:mb-0">
        <p className="text-sm font-semibold dark:text-white text-gray-800 sm:text-lg">
          Categoria:{" "}
          <span className="text-blue-500" id="category-name">
            {!currentCategory ? "TODOS" : currentCategory.toUpperCase()}
          </span>
        </p>
      </div>
      <div>
        <p className="text-sm font-semibold dark:text-white text-gray-800 sm:text-lg">
          Cantidad:{" "}
          <span className="text-blue-500" id="product-count text-xs">
            {!currentCategory ? AllProducts.length : filteredItems.length}
          </span>
        </p>
      </div>
    </div>
  );
};

export default InfoHeader;
