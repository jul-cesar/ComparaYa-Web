import React, { useContext } from "react";
import { UseFormatPrice } from "../../../hooks/useFormatPrice";
import {  SidebarContext } from "../../../context/sidebarContext";

const Total = () => {
  const { productsInCart } = useContext(SidebarContext);
  
  const montoTotalD1 = productsInCart.reduce(
    (total, item) => total + item.precio_d1 * item.quantity,
    0
  );

  const montoTotalOlim = productsInCart.reduce(
    (total, item) => total + item.precio_olim * item.quantity,
    0
  );

  const montoTotalExito = productsInCart.reduce(
    (total, item) => total + item.precio_exito * item.quantity,
    0
  );

  const montoTotal =
    Number(montoTotalD1) + Number(montoTotalOlim) + Number(montoTotalExito);
  return (
    <div className="m-4 p-4 md:p-5 md:w-[200px] border-t w-full self-center  border-black rounded-b dark:border-gray-600">
      <div className="mt-6 items-center rounded-lg border w-full bg-white p-6 shadow-md md:mt-0 md:w-[230px] md:h-[230px]  ">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Monto total Exito</p>
          <p className="text-gray-700">{UseFormatPrice(montoTotalExito)}</p>
        </div>
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Monto total Olimpica</p>
          <p className="text-gray-700">{UseFormatPrice(montoTotalOlim)}</p>
        </div>
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700"> Monto total D1 </p>
          <p className="text-gray-700">{UseFormatPrice(montoTotalD1)}</p>
        </div>

        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">
              {UseFormatPrice(montoTotal)}
            </p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
          Check out
        </button>
      </div>
    </div>
  );
};

export default Total;
