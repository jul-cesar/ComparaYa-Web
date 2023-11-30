import React, { useContext, useEffect, useState } from "react";

import { getCategories } from "../../../api/productsFetching";
import { Products } from "../../../context/productsContext";
import InputSearch from "./InputSearch";
import SidebarOption from "./SidebarOption";
import DropdownCategorias from "./DropdownCategorias";

const CategoriesSidebar = ({ setCurrentCategory }) => {
  const { openSidebar, setOpenCarrito, openCarrito, productsInCart } =
    useContext(Products);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return (
    <>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          !openSidebar && "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <InputSearch />

              <DropdownCategorias
                setCurrentCategory={setCurrentCategory}
                categories={categories}
              />
            </li>

            <SidebarOption
              productsInCart={productsInCart}
              clicked={() => setOpenCarrito(!openCarrito)}
              text={"Carrito"}
              svg={
                "M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
              }
            />
          </ul>
        </div>
      </aside>
    </>
  );
};

export default CategoriesSidebar;
