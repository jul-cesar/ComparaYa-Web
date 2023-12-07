// ProductsContext.js
import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarFunction = ({ children }) => {
  const [openCarrito, setOpenCarrito] = useState(false);
  const [productsInCart, setProductsInCart] = useState([]);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [errorCats, setErrorCats] = useState(false);
  const [query, setQuery] = useState("");
  const [loadingCategoryProducts, setLoadingCategoryProducts] = useState(false);
  const [currentCategory, setCurrentCategory] = useState();
  return (
    <SidebarContext.Provider
      value={{
        openCarrito,
        setOpenCarrito,
        productsInCart,
        setProductsInCart,
        openSidebar,
        setOpenSidebar,
        noResults,
        setNoResults,
        errorCats,
        setErrorCats,
        query,
        setQuery,
        setLoadingCategoryProducts,
        loadingCategoryProducts,
        currentCategory,
        setCurrentCategory,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
