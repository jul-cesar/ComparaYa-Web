import React, { useContext, useEffect, useState, useCallback } from "react";
import { Products } from "../../../context/productsContext";
import { useDebounce } from "../../../hooks/useDebounce";
import { getAllProductos } from "../../../api/productsFetching";
import { ScrollToTop } from "../../../utils/scrollTop";

const InputSearch = () => {
  const {
    AllProducts,
    setFilteredItems,
    products,
    setAllProducts,
    setIsSearching,
    setOpenSidebar,
  } = useContext(Products);
  const [query, setQuery] = useState("");
  const debouncedSearch = useDebounce(query);


  useEffect(() => {
    getAllProductos(setAllProducts);
  }, []);


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
    setOpenSidebar(false);
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
    <form>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Busca un producto"
          required
        />
      </div>
    </form>
  );
};

export default InputSearch;
