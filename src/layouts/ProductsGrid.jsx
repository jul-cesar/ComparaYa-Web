import React, { useContext } from "react";
import CardProduct from "../components/productsPage/Product/CardProduct";
import ProductSkeleton from "../components/productsPage/Product/ProductSkeleton";
import { nanoid } from "nanoid";
import { Products } from "../context/productsContext";

const ProductsGrid = ({ Items }) => {
  const {
    loadingProducts,
    errorCats,
    loadingCategoryProducts,
  } = useContext(Products);
  return (
    <ul className="grid-cols-mobile grid sm:grid-cols-16 gap-3 sm:gap-8  content-center">
      {!loadingProducts && !loadingCategoryProducts && !errorCats ? (
        Items.map((product, index) => {
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
  );
};

export default ProductsGrid;
