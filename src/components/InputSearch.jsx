import React, { useContext, useEffect, useState } from "react";
import { Products } from "../context/productsContext";
import { useDebounce } from "../hooks/useDebounce";
import { getAllProductos } from "../api/productsFetching";

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

  if (query === "") {
    setFilteredItems(products);
    setIsSearching(false);
  }
  useEffect(() => {
    getAllProductos(setAllProducts);
    console.log("traje todos los productos");
  }, []);

  useEffect(() => {
    const filtered = AllProducts.filter((p) =>
      p.nombre
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(debouncedSearch.toLowerCase())
    );
    setIsSearching(true);
    setFilteredItems(filtered);
  }, [debouncedSearch]);

  return (
    <div className="hidden md:flex w-[22rem] rounded bg-input shadow-md">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        className="w-full border-none bg-transparent px-3 py-1 text-gray-900 focus:outline-none"
        placeholder="search"
      />
      <button className="m-2 rounded px-4 py-2 font-semibold text-gray-100 bg-slate-500">
        Buscar
      </button>
    </div>
  );
};

export default InputSearch;
