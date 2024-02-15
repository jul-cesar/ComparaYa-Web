import React, { useContext, useEffect } from "react";

import InputSearch from "./InputSearch";
import SidebarOption from "./SidebarOption";
import DropdownCategorias from "./DropdownCategorias";
import { SidebarContext } from "../../../context/sidebarContext";
import { useCategories } from "../../../hooks/api/useCategories";

const CategoriesSidebar = React.memo(() => {
  const { setOpenCarrito, productsInCart, openSidebar } =
    useContext(SidebarContext);
  const { categories, getCategories } = useCategories();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${!openSidebar && "-translate-x-full"
          } bg-white border-r border-gray-200 sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <li>
              <InputSearch />

              <DropdownCategorias

                categories={categories}
              />
            </li>

           
          </ul>
        </div>
      </aside>
    </>
  )
}
)

export default CategoriesSidebar;
