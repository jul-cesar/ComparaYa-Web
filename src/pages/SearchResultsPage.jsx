import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductsGrid from "../layouts/ProductsGrid";
import { useGetSearchProducts } from "../hooks/api/useGetSearchProducts";
import LoaderComparationPage from "../components/LoaderComparationPage";

const SearchResultsPage = () => {
  const { squery } = useParams();
  const navigate = useNavigate();

  const { filteredItems, searchResult, noResult } = useGetSearchProducts(
    squery,
    1,
    8
  );

  if (noResult) {
    return (
      <div className="flex flex-col min-h-screen justify-center p-5">
        <h1 className="text-center text-5xl">no res</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen justify-center p-5">
      {!searchResult ? (
        <LoaderComparationPage />
      ) : (
        <>
        <a href="/">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        </a>
          <h1 className="p-2 m-4 text-xl">RESULTADOS PARA: {squery.toUpperCase()}</h1>

          <ProductsGrid Items={filteredItems} />
        </>
      )}
    </div>
  );
};

export default SearchResultsPage;
