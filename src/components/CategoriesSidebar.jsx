import React, { useContext, useEffect, useState } from "react";
import {
  getAllProductos,
  getCategories,
  getProductos,
  getProductsByCategory,
} from "../api/productsFetching";
import { Products } from "../context/productsContext";

const CategoriesSidebar = ({setCurrentCategory}) => {
  console.log("me renderizo");
  const { setProducts, setFilteredItems, setLoadingProducts } =
    useContext(Products);

  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return (
    <aside className="w-1/4 mt-32 rounded-lg flex items-center justify-center p-4  h-screen ">
      <main>
        <div>
          <p
            className="text-gray-700 text-lg py-2 hover:bg-gray-200 rounded-md cursor-pointer font-poppins "
            onClick={() => {getProductos(setProducts, setLoadingProducts, 1) 
              setCurrentCategory("")}}
          >
            {" "}
            Todos{" "}
          </p>
          {categories.map((category, index) => (
            <p
              onClick={() => {
                getProductsByCategory(setFilteredItems, category.id);
                setCurrentCategory(category.nombre);
              }}
              key={index}
              className="text-gray-700 text-base py-2 hover:bg-gray-200 rounded-md cursor-pointer font-poppins"
            >
              {category.nombre}
            </p>
          ))}
        </div>
      </main>
    </aside>
  );
};

export default CategoriesSidebar;
