import React from "react";

const InfoHeader = ({currentCategory, AllProducts, filteredItems}) => {
  return (
    <div class="flex flex-row justify-between p-4 border-b-2 border-gray-800 dark:border-white  shadow-sm mt-14 mb-6 ml-8 mr-8">
      <p class="text-lg font-semibold dark:text-white text-gray-800">
        Categoria:{" "}
        <span class="text-blue-500" id="category-name">
          {!currentCategory ? "TODOS" : currentCategory.toUpperCase()}
        </span>
      </p>
      <p class="text-lg font-semibold dark:text-white text-gray-800">
        Numero de productos:{" "}
        <span class="text-blue-500" id="product-count">
          {!currentCategory ? AllProducts.length : filteredItems.length}
        </span>
      </p>
    </div>
  );
};

export default InfoHeader;