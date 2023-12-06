import React, { useContext } from "react";
import { UseFormatPrice } from "../../../hooks/useFormatPrice";
import { Products } from "../../../context/productsContext";

import DistribuidoraTag from "../../DistribuidoraTag";

import CartIcon from "./CartIcon";
import LupaIcon from "./LupaIcon";

const CardProduct = React.memo(
  ({ img, nombre, precio_exito, precio_olim, precio_d1, product }) => {
    const { productsInCart, setProductsInCart, products } =
      useContext(Products);
    const formattedExitoPrice = UseFormatPrice(precio_exito);
    const formattedOlimPrice = UseFormatPrice(precio_olim);
    const formattedD1Price = UseFormatPrice(precio_d1);

    return (
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center">
          <img
          loading="lazy"
            className="object-cover sm:h-52 sm:w-48 m-4 h-[140px] w-36 rounded-t-lg max-w-full mb-2"
            src={img}
            alt={img}
          />
        </div>
        <div className="px-4 ">
          <a
            href="#"
            className="sm:text-lg text-[12px] font-medium text-gray-700 dark:text-white"
          >
            {nombre.toUpperCase()}
          </a>
          <DistribuidoraTag
            precio_d1={precio_d1}
            precio_exito={precio_exito}
            precio_olim={precio_olim}
          />
          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-col items-start gap-1">
              {precio_exito > 0 && (
                <span className="sm:text-lg text-base   font-bold text-gray-900 dark:text-white">
                  {formattedExitoPrice}
                </span>
              )}
              {precio_olim > 0 && (
                <span className="sm:text-lg text-base font-bold text-gray-900 dark:text-white">
                  {formattedOlimPrice}
                </span>
              )}
              {precio_d1 > 0 && (
                <span className="sm:text-lg text-base font-bold text-gray-900 dark:text-white">
                  {formattedD1Price}
                </span>
              )}
            </div>
            <div className="flex flex-row items-center gap-2">
              <CartIcon
                product={product}
                setProductsInCart={setProductsInCart}
                productsInCart={productsInCart}
              />
              <LupaIcon />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default CardProduct;
