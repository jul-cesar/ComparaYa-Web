import React, { useContext } from "react";
import { Products } from "../context/productsContext";
import { UseFormatPrice } from "../hooks/useFormatPrice";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Carrito = () => {
  const { openCarrito, setOpenCarrito, productsInCart, setProductsInCart } =
    useContext(Products);
  const [parent, enableAnimations] = useAutoAnimate();

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
    <div
      id="default-modal"
      tabindex="-1"
      aria-hidden="true"
      className={`${
        openCarrito ? "flex" : "hidden"
      } items-center justify-center fixed top-0 bottom-0 right-0 p-4 left-0 z-50 w-full h-full bg-black bg-opacity-50`}
    >
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-screen  max-w-2xl max-h-[500px] overflow-y-auto">
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="flex flex-row p-3 over   md:p-5 space-y-4">
          <div class="rounded-lg md:w-screen" ref={parent}>
            {productsInCart.map((cart) => (
              <div class="justify-between items-center mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img
                  src={cart.img}
                  alt="product-image"
                  class=" object-cover h-48 w-48 rounded-t-lg max-w-full align-middle italic bg-no-repeat bg-cover ms"
                />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">
                      {cart.nombre}
                    </h2>
                    <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                  </div>
                  <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                      <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                        {" "}
                        -{" "}
                      </span>
                      <input
                        class="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value={cart.quantity}
                        min="1"
                      />
                      <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div class="flex items-center space-x-4">
                      <p class="text-sm">
                        {cart.precio_exito > 0 &&
                          UseFormatPrice(cart.precio_exito)}
                      </p>
                      <p class="text-sm">
                        {cart.precio_olim > 0 &&
                          UseFormatPrice(cart.precio_olim)}
                      </p>
                      <p class="text-sm">
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
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
        <div class="m-4 p-4 md:p-5 md:w-[500px]  border-t w-full  border-gray-200 rounded-b dark:border-gray-600">
          <div class="mt-6 h-full items-center  rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-[600px]">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Monto total Exito</p>
              <p class="text-gray-700">{UseFormatPrice(montoTotalExito)}</p>
            </div>
            <div className="mb-2 flex justify-between">
              <p class="text-gray-700">Monto total Olimpica</p>
              <p class="text-gray-700">{UseFormatPrice(montoTotalOlim)}</p>
            </div>
            <div className="mb-2 flex justify-between">
              <p class="text-gray-700"> Monto total D1 </p>
              <p class="text-gray-700">{UseFormatPrice(montoTotalD1)}</p>
            </div>

            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">
                  {UseFormatPrice(montoTotal)}
                </p>
              </div>
            </div>
            <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
