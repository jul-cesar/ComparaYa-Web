import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductsGrid from "../layouts/ProductsGrid";
import { useGetSearchProducts } from "../hooks/api/useGetSearchProducts";
import LoaderComparationPage from "../components/LoaderComparationPage";
import { SidebarContext } from "../context/sidebarContext";
import Carrito from "../components/productsPage/Carrito/Carrito";
import CategoriesSidebar from "../components/productsPage/Sidebar/CategoriesSidebar";
import Navbar from "../components/productsPage/Navbar";
import InfiniteScroll from "react-infinite-scroll-component";
import { ScrollToTop } from "../utils/scrollTop";

const SearchResultsPage = () => {
  const { squery } = useParams();
  const navigate = useNavigate();
  const [curPage, setCurPage] = useState(1);

  const { filteredItems, getSearchProds } = useGetSearchProducts(
    squery,
    curPage
  );

  useEffect(() => {
    const f = async () => {
      await getSearchProds();
    };
    f();
  }, [curPage, squery]);

  // if (noResult) {
  //   return (
  //     <div className="flex flex-col min-h-screen justify-center p-5">
  //       <h1 className="text-center text-5xl">no res</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col min-h-screen justify-center ">
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

        <Navbar />
        <CategoriesSidebar />
        <h1 className="pt-7 m-4 text-xl sm:ml-[300px]">
          RESULTADOS PARA: {squery.toUpperCase()}
        </h1>
        <Carrito />
        <InfiniteScroll
          endMessage={<p>End</p>}
          hasMore={curPage < filteredItems.length / 8}
          dataLength={filteredItems.length}
          next={() => {
            setCurPage((prevPage) => prevPage + 1);
          }}
          loader={
            <div className="flex justify-center items-center">
              {" "}
              <div
                className="inline-block h-12 w-12 m-11 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              />
            </div>
          }
        >
          <ProductsGrid Items={filteredItems} />
        </InfiniteScroll>
      </>
    </div>
  );
};

export default SearchResultsPage;
