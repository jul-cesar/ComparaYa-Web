import React from "react";

const CardProduct = ({ img, nombre, precio_exito, precio_olim, precio_d1 }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      <img
      loading="lazy"
        src={img}
        className="m-10 object-cover h-48 w-48 rounded-lg"
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{nombre}</h2>
        <div className="mt-2">
          {precio_exito > 0 && (
            <p className="text-gray-600">Exito: {precio_exito}</p>
          )}
          {precio_olim > 0 && (
            <p className="text-gray-600">Olimpica: {precio_olim}</p>
          )}
          {precio_d1 > 0 && <p className="text-gray-600">D1: {precio_d1}</p>}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
