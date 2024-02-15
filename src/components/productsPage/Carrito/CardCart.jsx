import React, { useState } from "react";
import { UseFormatPrice } from "../../../hooks/useFormatPrice";

import DistribuidoraTag from "../../DistribuidoraTag";
import Lottie from "lottie-react";
import imgload from "../../../media/imgload.json";

const CardCart = ({
  img,
  name,
  precio_d1,
  precio_exito,
  precio_olim,
  quantity = 1,
  setProductsInCart,
  productsInCart,
  id,
}) => {
  const IncreaseQuantity = () => {
    setProductsInCart((prevState) =>
      prevState.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const handleQuantityChange = (e) => {
    if (e > 0) {
      setProductsInCart((prevState) =>
        prevState.map((p) => (p.id === id ? { ...p, quantity: e } : p))
      );
    }
  };
  const DecreaceQuantity = () => {
    setProductsInCart((prevState) =>
      prevState.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p
      )
    );
  };

  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col md:p-1 m-2 ">
      <div className="rounded-lg w-full md:w-full">
        <div className=" items-center flex flex-row mb-3 rounded-lg bg-white p-2 shadow-md sm:flex sm:justify-start">
          {!imgError ? (
            <img
              src={img}
              onError={() => {
                setImgError(true);
              }}
              alt="product-image"
              className=" object-cover mr-3 h-48 w-48 rounded-t-lg max-w-full align-middle italic bg-no-repeat bg-cover ms"
            />
          ) : (
            <Lottie
              animationData={imgload}
              className="object-cover sm:h-52 sm:w-48 m-4 h-[140px] w-36 rounded-t-lg max-w-full mb-2"
            />
          )}
          <div className="sm:ml-4  sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-base font-bold text-gray-900">{name}</h2>
              <DistribuidoraTag
                precio_d1={precio_d1}
                precio_exito={precio_exito}
                precio_olim={precio_olim}
              />
            </div>
            <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span
                  className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  onClick={DecreaceQuantity}
                >
                  {" "}
                  -{" "}
                </span>
                <input
                  className="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  value={quantity}
                  min={1}
                  onChange={(e) => handleQuantityChange(e.target.value)}
                />
                <span
                  className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  onClick={IncreaseQuantity}
                >
                  {" "}
                  +{" "}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm">
                  {precio_exito > 0 && UseFormatPrice(precio_exito)}
                </p>
                <p className="text-sm">
                  {precio_olim > 0 && UseFormatPrice(precio_olim)}
                </p>
                <p className="text-sm">
                  {precio_d1 > 0 && UseFormatPrice(precio_d1)}
                </p>
                <svg
                  onClick={() => {
                    setProductsInCart(
                      productsInCart.filter((p) => p.id !== id)
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
      </div>
    </div>
  );
};

export default CardCart;
