import React, {
  Suspense,
  memo,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Products } from "../context/productsContext";
import { getProductos } from "../api/productsFetching";
import CardProduct from "../components/productsPage/Product/CardProduct";
import Navbar from "../components/productsPage/Navbar";

import { nanoid } from "nanoid";
import PaginationButton from "../components/productsPage/PaginationButton";

import CategoriesSidebar from "../components/productsPage/Sidebar/CategoriesSidebar";
import InfoHeader from "../components/productsPage/Product/InfoHeader";
import Carrito from "../components/productsPage/Carrito/Carrito";

import ProductSkeleton from "../components/productsPage/Product/ProductSkeleton";


const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
 

  const {
    setProducts,
    AllProducts,
    setLoadingProducts,
    loadingProducts,
    filteredItems,
    isSearching,
    setCurrentCategory,
    currentCategory,
    setOpenCarrito,
    loadingCategoryProducts,
  } = useContext(Products);

  useEffect(() => {
    getProductos(setProducts, setLoadingProducts, currentPage);
  }, [currentPage]);

  return (
    <div className="flex flex-col  min-h-screen justify-center dark:bg-gray-800 ">
      <Navbar />

      <CategoriesSidebar setCurrentCategory={setCurrentCategory} />

      <div className="flex items-center justify-center">
        <Carrito  />
      </div>

      <div className="p-1 sm:p-5">
        <div className="flex items-center justify-center">
          <div className="flex-grow">
            {/* <div className="fixed bottom-5 right-10 z-50">
              {(!isAtTop && !openCarrito) && <TopButton />}
            </div> */}

            <div className="p-4 lg:ml-64">
              <InfoHeader
                currentCategory={currentCategory}
                AllProducts={AllProducts}
                filteredItems={filteredItems}
              />
              <ul className="grid-cols-mobile grid sm:grid-cols-16 gap-3 sm:gap-8  content-center">
                {!loadingProducts && !loadingCategoryProducts ? (
                  filteredItems.map((product, index) => {
                    return (
                      <CardProduct
                        product={product}
                        key={nanoid()}
                        img={product.imagen_url}
                        nombre={product.nombre}
                        precio_exito={product.precio_exito}
                        precio_olim={product.precio_olim}
                        precio_d1={product.precio_d1}
                      />
                    );
                  })
                ) : (
                  <ProductSkeleton />
                )}
              </ul>
            </div>

            {!isSearching && !currentCategory && (
              <PaginationButton
                click={() => {
                  setCurrentPage(currentPage + 1);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductsPage);
