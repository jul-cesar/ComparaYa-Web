import React, { useContext, useState } from "react";
import { UseFormatPrice } from "../../../hooks/useFormatPrice";
import DistribuidoraTag from "../../DistribuidoraTag";
import CartIcon from "./CartIcon";
import LupaIcon from "./LupaIcon";
import { SidebarContext } from "../../../context/sidebarContext";

import FavoriteIcon from "../../FavoriteIcon";

const CardProduct = React.memo(
  ({ img, nombre, precio_exito, precio_olim, precio_d1, product }) => {
    const { productsInCart, setProductsInCart } = useContext(SidebarContext);
    const formattedExitoPrice = UseFormatPrice(precio_exito);
    const formattedOlimPrice = UseFormatPrice(precio_olim);
    const formattedD1Price = UseFormatPrice(precio_d1);

    const [imgError, setImgError] = useState(false);
    return (
      <div className="sm:h-[500px] h-[320px]  bg-white border border-gray-200 m-1 rounded-lg shadow">
        <div className="flex flex-col items-center">

          <img
            loading="lazy"
            className="object-cover sm:h-52 sm:w-48 m-2 h-[120px] w-36 rounded-t-lg max-w-full"
            src={img}


          />


        </div>
        <div className="p-2">
          <a
            href="#"
            className="sm:text-lg text-[12px] text-center font-medium text-gray-700"
          >
            {nombre.toUpperCase()}
          </a>

          <div className="flex flex-col justify-center ">
            <div className="flex items-center justify-between ">

              {precio_exito > 0 && (
                <span className="sm:text-lg text-sm   font-bold text-gray-900">
                  {formattedExitoPrice}
                </span>
              )}
              {precio_olim > 0 && (
                <span className="sm:text-lg text-sm font-bold text-gray-900">
                  {formattedOlimPrice}
                </span>
              )}
              {precio_d1 > 0 && (
                <span className="sm:text-lg text-sm font-bold text-gray-900">
                  {formattedD1Price}
                </span>
              )}
              <DistribuidoraTag
                precio_d1={precio_d1}
                precio_exito={precio_exito}
                precio_olim={precio_olim}
              />
            </div>
            <div className="flex sm:justify-evenly justify-between items-center ">
              <CartIcon
                product={product}
                setProductsInCart={setProductsInCart}
                productsInCart={productsInCart}
              />
              <LupaIcon product={product} />
              <FavoriteIcon />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default CardProduct;
