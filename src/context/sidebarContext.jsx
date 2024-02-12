// ProductsContext.js
import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarFunction = ({ children }) => {
  const [openCarrito, setOpenCarrito] = useState(false);
  const [productsInCart, setProductsInCart] = useState([]);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <SidebarContext.Provider
      value={{
        openCarrito,
        setOpenCarrito,
        productsInCart,
        setProductsInCart,
        openSidebar,
        setOpenSidebar,
        query,
        setQuery,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
