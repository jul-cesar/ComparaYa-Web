import React, { useContext } from "react";
import { Products } from "../../../context/productsContext";
import { UseFormatPrice } from "../../../hooks/useFormatPrice";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Total from "./Total";
import DistribuidoraTag from "../../DistribuidoraTag";
import empty from "../../../media/empty.json"

import Lottie from "lottie-react";

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
      
      <div className="relative bg-white rounded-lg  flex-col sm:block sm:items-center flex shadow dark:bg-gray-700 w-screen max-w-2xl max-h-[500px] overflow-y-auto overflow-x-hidden">
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

        { productsInCart.length === 0 && <div className="flex flex-col justify-center items-center p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Carrito vacio, agrega productos</h2>
          <Lottie animationData={empty} className="h-[360px] w-[400px]" />
        </div>}

        <div className="flex flex-row p-3 over   md:p-5 space-y-4">
          <div className="rounded-lg md:w-screen" ref={parent}>
            {productsInCart.map((cart) => (
              <div className="justify-between items-center flex flex-col mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img
                  src={cart.img}
                  alt="product-image"
                  className=" object-cover h-48 w-48 rounded-t-lg max-w-full align-middle italic bg-no-repeat bg-cover ms"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {cart.nombre}
                    </h2>
                    <DistribuidoraTag
                      precio_d1={cart.precio_d1}
                      precio_exito={cart.precio_exito}
                      precio_olim={cart.precio_olim}
                    />
                  </div>
                  <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                        {" "}
                        -{" "}
                      </span>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value={cart.quantity}
                        min="1"
                      />
                      <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">
                        {cart.precio_exito > 0 &&
                          UseFormatPrice(cart.precio_exito)}
                      </p>
                      <p className="text-sm">
                        {cart.precio_olim > 0 &&
                          UseFormatPrice(cart.precio_olim)}
                      </p>
                      <p className="text-sm">
                        {cart.precio_d1 > 0 && UseFormatPrice(cart.precio_d1)}
                      </p>
                      <svg
                        onClick={() => {
                          setProductsInCart(
                            productsInCart.filter((p) => p.id !== cart.id)
                          );
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       {productsInCart.length !== 0 &&  <Total />}
      </div>
    </div>
  );
};

export default Carrito;
