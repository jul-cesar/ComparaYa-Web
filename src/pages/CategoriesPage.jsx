import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/productsPage/Navbar";
import ProductsLayout from "../layouts/ProductsLayout";
import ProductsGrid from "../layouts/ProductsGrid";
import Carrito from "../components/productsPage/Carrito/Carrito";
import { useParams } from "react-router-dom";
import { useProductosCategory } from "../hooks/api/useProductosCategory";
import { useGetCategory } from "../hooks/api/useGetCategory";
import CategoriesSidebar from "../components/productsPage/Sidebar/CategoriesSidebar";
import { Products } from "../context/productsContext";
import InfiniteScroll from "react-infinite-scroll-component";
import LoaderComparationPage from "../components/LoaderComparationPage";

const CategoriesPage = () => {
  const [curPage, setCurPage] = useState(1);

  const { categ } = useParams();
  const { getCategory, category } = useGetCategory();
  const { productsCategory, fetchProductsByCategory, setProductsCategory } =
    useProductosCategory(category, curPage);

  useEffect(() => {
    fetchProductsByCategory();
  }, [curPage]);

  useEffect(() => {
    const fetchData = async () => {
      await getCategory(categ);
    };
    fetchData();
  }, [categ]);

  useEffect(() => {
    const fetchCats = async () => {
      await fetchProductsByCategory();
    };

    fetchCats();
  }, [categ]);

  return (
    <div className="flex flex-col min-h-screen justify-center">
      <Navbar />
      <CategoriesSidebar setCurrentItems={setProductsCategory} />
      <Carrito />
      <ProductsLayout currentItems={productsCategory.length}>
        <InfiniteScroll
          loader={
            <div className="flex justify-center items-center">
              {" "}
              <div
                className="inline-block h-12 w-12 m-11 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              />
            </div>
          }
          dataLength={productsCategory.length}
          hasMore={curPage < productsCategory.length / 8}
          next={() => {
            setCurPage((prevPage) => prevPage + 1);
          }}
        >
          <ProductsGrid Items={productsCategory} />
        </InfiniteScroll>
      </ProductsLayout>
    </div>
  );
};

export default CategoriesPage;
