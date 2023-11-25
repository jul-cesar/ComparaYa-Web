import React, { useContext, useEffect, useState, useCallback } from "react";
import { Products } from "../context/productsContext";
import { useDebounce } from "../hooks/useDebounce";
import { getAllProductos } from "../api/productsFetching";
import { ScrollToTop } from "../utils/scrollTop";

const InputSearch = () => {
  const {
    AllProducts,
    setFilteredItems,
    products,
    setAllProducts,
    setIsSearching,
  } = useContext(Products);
  const [query, setQuery] = useState("");
  const debouncedSearch = useDebounce(query);

  // Fetch all products only once when the component mounts
  useEffect(() => {
    getAllProductos(setAllProducts);
  }, []);

  // Callback for filtering products
  const filterProducts = useCallback(() => {
    const filtered = AllProducts.filter((p) =>
      p.nombre
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(debouncedSearch.toLowerCase())
    );
    ScrollToTop();
    setFilteredItems(filtered);
    setIsSearching(true);
  }, [AllProducts, debouncedSearch, setFilteredItems, setIsSearching]);

  // Effect for handling debounced search
  useEffect(() => {
    if (debouncedSearch !== "") {
      filterProducts();
    }
  }, [debouncedSearch, filterProducts]);

  // Effect for resetting when query is cleared
  useEffect(() => {
    if (query === "") {
      setFilteredItems(products);
      setIsSearching(false);
    }
  }, [query, products, setFilteredItems, setIsSearching]);

  return (
    <div className="hidden md:flex  rounded bg-input shadow-md mt-4 ">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        className="w-full border-none bg-transparent px-3 py-1 text-gray-900 focus:outline-none "
        placeholder="search"
      />
      <button className="m-2 rounded px-4 py-2 font-semibold text-gray-100 bg-slate-500">
        Buscar
      </button>
    </div>
  );
};

export default InputSearch;