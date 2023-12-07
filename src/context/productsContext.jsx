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
  const [openCarrito, setOpenCarrito] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [errorCats, setErrorCats] = useState(false);
  const [query, setQuery] = useState("");
  const [loadingCategoryProducts, setLoadingCategoryProducts] = useState(false);
  const [loadingProductsFirst, setLoadingProductsFirst] = useState(false);
  const [currentCategory, setCurrentCategory] = useState();
  const [productsInCart, setProductsInCart] = useState([]);
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
        setOpenSidebar,
        setOpenCarrito,
        openCarrito,
        productsInCart,
        setProductsInCart,
        currentCategory,
        setCurrentCategory,
        loadingCategoryProducts,
        setLoadingCategoryProducts,
        loadingProductsFirst,
        setLoadingProductsFirst,
        noResults,
        setNoResults,
        setQuery,
        query,
        errorCats,
        setErrorCats,
      }}
    >
      {children}
    </Products.Provider>
  );
};
