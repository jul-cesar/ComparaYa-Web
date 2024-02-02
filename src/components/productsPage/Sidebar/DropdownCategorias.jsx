import React, { useContext, useState } from "react";

import OpenDropdownButton from "./OpenDropdownButton";

import { SidebarContext } from "../../../context/sidebarContext";
import { useProductosPaginados } from "../../../hooks/api/useProductosPaginados";
import { useProductosCategory } from "../../../hooks/api/useProductosCategory";
import { Link } from "react-router-dom";

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
        {categories.map((categorie) => (
          <li key={categorie.id}>
            <Link
              reloadDocument
              to={`/categories/${categorie.nombre}`}
              onClick={() => {
                setOpenSidebar(false);
              }}
              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 cursor-pointer"
            >
              {categorie.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DropdownCategorias;
