// ProductsContext.js
import React, { createContext, useState } from "react";

export const Products = createContext();

export const ProductsFunction = ({ children }) => {

  const [ComparationItems, setComparationItems] = useState([]);
  const [AllProducts, setAllProducts] = useState([]);
  const [currentCategoryId, setCurrentCategoryId] = useState();

  return (
    <Products.Provider
      value={{
        AllProducts,
        setAllProducts,
        setComparationItems,
        ComparationItems,
        setCurrentCategoryId,
        currentCategoryId
      }}
    >
      {children}
    </Products.Provider>
  );
};
