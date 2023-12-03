import React from "react";
import { UseFormatPrice } from "../../../hooks/useFormatPrice";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import DistribuidoraTag from "../../DistribuidoraTag";

const CardCart = ({
  img,
  name,
  precio_d1,
  precio_exito,
  precio_olim,
  quantity,
  setProductsInCart,
  productsInCart,
  id,
}) => {
  const [parent, enableAnimations] = useAutoAnimate();
  return (
    <div className="flex flex-row p-3 over   md:p-5 space-y-4" ref={parent}>
      <div className="rounded-lg md:w-screen" >
        <div className="justify-between items-center flex flex-col mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img
            src={img}
            alt="product-image"
            className=" object-cover h-48 w-48 rounded-t-lg max-w-full align-middle italic bg-no-repeat bg-cover ms"
          />
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">{name}</h2>
              <DistribuidoraTag
                precio_d1={precio_d1}
                precio_exito={precio_exito}
                precio_olim={precio_olim}
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
                  value={quantity}
                  min="1"
                />
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
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
