import React, { useContext, useEffect, useState } from "react";
import { Products } from "../context/productsContext";

const InputSearch = () => {
  const { AllProducts, setFilteredItems, products } = useContext(Products);
  const [query, setQuery] = useState("");

  if (query === "") {
    setFilteredItems(products);
  }

  useEffect(() => {
    const filtered = AllProducts.filter((p) =>
      p.nombre
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(query.toLowerCase())
    );
    setFilteredItems(filtered)
  }, [query]);

  return (
    <div className="flex w-[30rem] rounded bg-black-white shadow-md">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        className="w-full border-none bg-transparent px-4 py-1 text-gray-900 focus:outline-none"
        placeholder="search"
      />
      <button className="m-2 rounded px-4 py-2 font-semibold text-gray-100 bg-slate-500">
        Buscar
      </button>
    </div>
  );
};

export default InputSearch;
