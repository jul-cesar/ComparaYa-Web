import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/productsPage/Navbar";
import ProductsLayout from "../layouts/ProductsLayout";
import ProductsGrid from "../layouts/ProductsGrid";
import Carrito from "../components/productsPage/Carrito/Carrito";
import { useParams } from "react-router-dom";
import { useProductosCategory } from "../hooks/api/useProductosCategory";
import { useGetCategory } from "../hooks/api/useGetCategory";
import CategoriesSidebar from "../components/productsPage/Sidebar/CategoriesSidebar";

const CategoriesPage = () => {
  const [curPage, setCurPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const { categ } = useParams();
  const { getCategory, category } = useGetCategory();
  const { productsCategory, fetchProductsByCategory } = useProductosCategory(
    category,
    curPage
  );
  console.log(curPage);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      setCurPage((prev) => prev + 1);
    }
  };

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
      <CategoriesSidebar/>
      <Carrito />
      <ProductsLayout  currentItems={productsCategory.length}>
        <ProductsGrid Items={productsCategory} />
      </ProductsLayout>
    </div>
  );
};

export default CategoriesPage;
