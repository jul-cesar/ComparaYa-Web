import React, { memo, useContext, useEffect, useRef, useState } from "react";
import Navbar from "../components/productsPage/Navbar";
import CategoriesSidebar from "../components/productsPage/Sidebar/CategoriesSidebar";
import Carrito from "../components/productsPage/Carrito/Carrito";
import ProductsLayout from "../layouts/ProductsLayout";
import ProductsGrid from "../layouts/ProductsGrid";
import { SidebarContext } from "../context/sidebarContext";
import { useProductosPaginados } from "../hooks/api/useProductosPaginados";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import InfiniteScrollLoader from "../components/InfiniteScrollLoader";
import { ViewportList } from "react-viewport-list";

const ProductsPage = () => {


  const { fetchProductosPaginados } = useProductosPaginados();

  const { setCurrentCategory } = useContext(SidebarContext);

  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: async ({ pageParam = 1 }) => fetchProductosPaginados(pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      } else {
        return null;
      }
    }
  });
  const products = data?.pages.reduce((prevProds, page) => prevProds.concat(page.results), [])


  return (
    <div className="flex flex-col h-full min-h-screen justify-center" >
      <Navbar />

      <CategoriesSidebar setCurrentCategory={setCurrentCategory} />

      <Carrito />

      <ProductsLayout >
        <InfiniteScroll
          next={() => fetchNextPage()}
          dataLength={products ? products.length : 0}
          loader={<div>
            <div className="px-3 py-4 text-xl font-medium leading-none text-center bg-gray-700-200  animate-pulse">
              Buscando...
            </div>
          </div>}
          hasMore={hasNextPage || isLoading}
        >
          <ProductsGrid Items={products} isLoading={isLoading} />
        </InfiniteScroll>
      </ProductsLayout>

    </div >
  );
};

export default memo(ProductsPage);
