import React from "react";
import { UseFormatPrice } from "../hooks/useFormatPrice";

const CardProduct = ({ img, nombre, precio_exito, precio_olim, precio_d1 }) => {
  const formattedExitoPrice = UseFormatPrice(precio_exito);
  const formattedOlimPrice = UseFormatPrice(precio_olim);
  const formattedD1Price = UseFormatPrice(precio_d1);

  return (
    <div className="max-w-sm mx-auto bg-black-white shadow-2xl rounded-lg overflow-hidden flex flex-col justify-center items-center ">
      <img
        loading="lazy"
        src={img}
        className="m-10 object-cover h-48 w-48 rounded-lg max-w-full align-middle italic bg-no-repeat bg-cover ms"
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="text-xl font-poppins">{nombre}</h2>
        <div className="mt-2">
          {precio_exito > 0 && (
            <p className="text-gray-600 font-bold font-poppins">
              Exito: {formattedExitoPrice}
            </p>
          )}
          {precio_olim > 0 && (
            <p className="text-gray-600 font-poppins  ">
              Olimpica: {formattedOlimPrice}
            </p>
          )}
          {precio_d1 > 0 && (
            <p className="text-gray-600 font-poppins  ">
              D1: {formattedD1Price}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardProduct);
