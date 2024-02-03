import { useContext, useEffect, useState } from "react";
import { Products } from "../../context/productsContext";
import { ScrollToTop } from "../../utils/scrollTop";

export const useGetSearchProducts = (query, page) => {
  const { filteredItems, setFilteredItems } = useContext(Products);
  const [searchResult, setSearchResult] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const getSearchProds = async () => {
    setSearchResult(false);
    const BASE_API_URL =
      "https://api-compara-ya-git-main-jul-cesars-projects.vercel.app/productos/search";
    try {
      const result = await fetch(`${BASE_API_URL}/${query}/${page}/8`);
      const response = await result.json();

      setSearchResult(true);

      if (response.length === 0) {
        setNoResult(true);
      } else {
        setNoResult(false);
        setFilteredItems((prevItems) => [...prevItems, ...response]);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setNoResult(true);
    } finally {
      setSearchResult(true);
    }
  };

  return {
    searchResult,
    filteredItems,
    noResult,
    getSearchProds,
  };
};
