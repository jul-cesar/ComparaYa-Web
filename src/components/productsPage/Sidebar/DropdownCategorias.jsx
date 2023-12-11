import React, { useContext, useState } from "react";

import OpenDropdownButton from "./OpenDropdownButton";
import { ScrollToTop } from "../../../utils/scrollTop";
import { SidebarContext } from "../../../context/sidebarContext";
import { useProductosPaginados } from "../../../hooks/api/useProductosPaginados";
import { useProductosCategory } from "../../../hooks/api/useProductosCategory";

const DropdownCategorias = ({ categories, setCurrentCategory }) => {
  const [openCategories, setOpenCategories] = useState(false);
  const { setOpenSidebar } = useContext(SidebarContext);
  const { fetchProductsPaginados } = useProductosPaginados();
  const { getProductsByCategory } = useProductosCategory();
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
              fetchProductsPaginados(1);
              setCurrentCategory("");
              setOpenSidebar(false);
              ScrollToTop();
            }}
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100cursor-pointer"
          >
            Todos
          </a>
        </li>
        {categories.map((categorie) => (
          <li key={categorie.id}>
            <a
              onClick={() => {
                getProductsByCategory(categorie);
                setOpenSidebar(false);
              }}
              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 cursor-pointer"
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
