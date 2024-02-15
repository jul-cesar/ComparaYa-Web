import React, { useContext } from "react";
import CardProduct from "../components/productsPage/Product/CardProduct";
import ProductSkeleton from "../components/productsPage/Product/ProductSkeleton";
import { nanoid } from "nanoid";


const ProductsGrid = ({ Items, isLoading }) => {

  return (
    <>
      <ul className="grid-cols-mobile grid sm:grid-cols-16 gap-x-[10px] gap-y-[20px] sm:gap-10 content-center">
        {(!isLoading && Array.isArray(Items) )? (
          Items.map((product) => (
            <CardProduct
              product={product}
              key={nanoid()}
              img={product.imagen_url}
              nombre={product.nombre}
              precio_exito={product.precio_exito}
              precio_olim={product.precio_olim}
              precio_d1={product.precio_d1}
            />
          ))
        ) : (
          <ProductSkeleton />
        )}

        
      </ul>
    </>
  );
};

export default ProductsGrid;
