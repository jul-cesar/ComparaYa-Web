import React from "react";

const InfoHeader = ({ currentCategory, AllProducts, filteredItems }) => {
  return (
    <div className="flex flex-col p-4 border-b-2 border-gray-800 dark:border-white shadow-sm mt-14 mb-6 mx-4 sm:flex-row sm:justify-between">
      <div className="mb-4 sm:mb-0">
        <p className="text-lg font-semibold dark:text-white text-gray-800">
          Categoria:{" "}
          <span className="text-blue-500" id="category-name">
            {!currentCategory ? "TODOS" : currentCategory.toUpperCase()}
          </span>
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold dark:text-white text-gray-800">
          Numero de productos:{" "}
          <span className="text-blue-500" id="product-count">
            {!currentCategory ? AllProducts.length : filteredItems.length}
          </span>
        </p>
      </div>
    </div>
  );
};

export default InfoHeader;
