// ProductsContext.js
import React, { createContext, useState } from "react";

export const Products = createContext();

export const ProductsFunction = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [AllProducts, setAllProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <Products.Provider
      value={{
        products,
        setProducts,
        loadingProducts,
        setLoadingProducts,
        filteredItems,
        setFilteredItems,
        AllProducts,
        setAllProducts,
        isSearching,
        setIsSearching,
        openSidebar,
        setOpenSidebar
      }}
    >
      {children}
    </Products.Provider>
  );
};
