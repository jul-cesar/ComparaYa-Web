import React, { useContext, useEffect, useState } from "react";
import {
  getAllProductos,
  getCategories,
  getProductos,
  getProductsByCategory,
} from "../api/productsFetching";
import { Products } from "../context/productsContext";

const CategoriesSidebar = () => {
  console.log("me renderizo");
  const { setProducts, setFilteredItems, setLoadingProducts } =
    useContext(Products);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return (
    <aside className="w-1/4 mt-32 rounded-lg flex items-center justify-center bg-gray-100 p-4 border-r border-gray-300 h-screen overflow-auto">
      <main>
        <div>
          <p
            className="text-gray-700 text-sm py-2 hover:bg-gray-200 rounded-md cursor-pointer"
            onClick={() =>
              getProductos(setProducts, setLoadingProducts, 1)
            }
          >
            {" "}
            Todos{" "}
          </p>
          {categories.map((category, index) => (
            <p
              onClick={() =>
                getProductsByCategory(setFilteredItems, category.id)
              }
              key={index}
              className="text-gray-700 text-sm py-2 hover:bg-gray-200 rounded-md cursor-pointer"
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