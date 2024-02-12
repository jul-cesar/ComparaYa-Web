import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductsGrid from "../layouts/ProductsGrid";
import { useGetSearchProducts } from "../hooks/api/useGetSearchProducts";
import Carrito from "../components/productsPage/Carrito/Carrito";
import CategoriesSidebar from "../components/productsPage/Sidebar/CategoriesSidebar";
import Navbar from "../components/productsPage/Navbar";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "@tanstack/react-query";
import LoaderComparationPage from "../components/LoaderComparationPage";
import Footer from "../components/productsPage/Footer";

const SearchResultsPage = () => {
  const { squery } = useParams();

  const { getSearchProds } = useGetSearchProducts();

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["searchProducts", squery],
    queryFn: async ({ pageParam = 1 }) => getSearchProds(squery,
      pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      } else {
        return null;
      }
    }
  })
  const filteredItems = data?.pages.reduce((prevProds, page) => prevProds.concat(page.results), [])

  return (
    <div className="flex flex-col  min-h-screen justify-center">
      <div className="flex flex-col  h-full justify-center">
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

        <Navbar />
        <CategoriesSidebar />
        <h1 className="pt-7 m-4 text-xl sm:ml-[300px]">
          RESULTADOS PARA: {squery.toUpperCase()}
        </h1>
        <Carrito />
        <InfiniteScroll
          hasMore={hasNextPage || isLoading}
          dataLength={filteredItems ? filteredItems.length : 0}
          next={() => fetchNextPage()}
         
        >
          <ProductsGrid Items={filteredItems} isLoading={isLoading} />
        </InfiniteScroll>

      </div>

    </div>
  );
};

export default SearchResultsPage;
