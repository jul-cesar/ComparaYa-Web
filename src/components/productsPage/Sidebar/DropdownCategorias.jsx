import React, { useContext, useState } from "react";
import { Products } from "../../../context/productsContext";
import OpenDropdownButton from "./OpenDropdownButton";
import {
  getProductos,
  getProductsByCategory,
} from "../../../api/productsFetching";
import { ScrollToTop } from "../../../utils/scrollTop";

const DropdownCategorias = ({ categories, setCurrentCategory }) => {
  const [openCategories, setOpenCategories] = useState(false);
  const { setProducts, setFilteredItems, setLoadingProducts, setOpenSidebar, setLoadingCategoryProducts, setErrorCats, } =
    useContext(Products);
  return (
    <>
      <OpenDropdownButton
        openCategories={openCategories}
        setOpenCategories={setOpenCategories}
      />
      <ul
        id="dropdown-example"
        className={`${openCategories ? "block" : "hidden"} py-2 space-y-2`}
      >
        <li>
          <a
            onClick={() => {
              getProductos(setProducts, setLoadingProducts, 1);
              setCurrentCategory("");
              setOpenSidebar(false);
              ScrollToTop();
            }}
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer"
          >
            Todos
          </a>
        </li>
        {categories.map((categorie) => (
          <li key={categorie.id}>
            <a
              onClick={() => {
                getProductsByCategory(setFilteredItems, categorie, setLoadingCategoryProducts, setErrorCats, setCurrentCategory);
                setOpenSidebar(false);
              }}
              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer"
            >
              {categorie.nombre}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DropdownCategorias;
