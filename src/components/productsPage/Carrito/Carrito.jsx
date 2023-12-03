import React, { useContext } from "react";
import { Products } from "../../../context/productsContext";

import Total from "./Total";

import empty from "../../../media/empty.json";

import Lottie from "lottie-react";

import CardCart from "./CardCart";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Carrito = () => {
  const { openCarrito, setOpenCarrito, productsInCart, setProductsInCart } =
    useContext(Products);
    const [parent, enableAnimations] = useAutoAnimate();

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`${
        openCarrito ? "flex" : "hidden"
      } items-center justify-center fixed top-0 bottom-0 right-0 p-4 left-0 z-50 w-full h-full bg-black bg-opacity-50`}
    >
      <div className="relative bg-white rounded-lg  flex-col sm:block sm:items-center flex shadow dark:bg-gray-700 w-screen max-w-2xl max-h-[500px] overflow-y-auto overflow-x-hidden"ref={parent} >
        <div className="flex  items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Carrito de compras
          </h3>
          <button
            onClick={() => setOpenCarrito(false)}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        {productsInCart.length === 0 && (
          <div className="flex flex-col justify-center items-center p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Carrito vacio, agrega productos
            </h2>
            <Lottie animationData={empty} className="h-[360px] w-[400px]" />
          </div>
        )}

        {productsInCart.map((cart) => (
          <CardCart
            key={cart.id}
            img={cart.img}
            precio_d1={cart.precio_d1}
            precio_exito={cart.precio_exito}
            precio_olim={cart.precio_olim}
            quantity={cart.quantity}
            name={cart.nombre}
            setProductsInCart={setProductsInCart}
            productsInCart={productsInCart}
            id={cart.id}
          />
        ))}

        {productsInCart.length !== 0 && <Total />}
      </div>
    </div>
  );
};

export default Carrito;
