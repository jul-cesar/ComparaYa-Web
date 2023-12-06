import React from "react";
import { toast } from "sonner";

const CartIcon = ({ product, setProductsInCart, productsInCart }) => {
  const isProductInCart = productsInCart.some((item) => item.id === product.id);
  const productInCart = productsInCart.find((i) => i.id === product.id);

  const addProductToCart = () => {
    if (isProductInCart) {
      setProductsInCart((prevProducts) =>
        prevProducts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      toast.warning("La cantidad de este producto aumento en el carrito");
    } else {
      setProductsInCart([
        ...productsInCart,
        {
          nombre: product.nombre,
          precio_d1: product.precio_d1,
          precio_olim: product.precio_olim,
          precio_exito: product.precio_exito,
          img: product.imagen_url,
          quantity: 1,
          id: product.id,
        },
      ]);
      toast.success("Producto agregado al carrito");
    }
  };

  return (
    <div className="relative py-2">
      {isProductInCart ? (
        <div className="t-0 absolute left-3">
          <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
            {productInCart.quantity}
          </p>
        </div>
      ) : (
        <div className="t-0 absolute left-3">
          <p className="flex h-[1px] w-[1px] sm:h-2 sm:w-2 items-center justify-center rounded-full bg-gray-500 p-3 text-xs text-white">
            +
          </p>
        </div>
      )}
      <svg
        onClick={addProductToCart}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="file: h-[45px] w-[30px]  sm:h-[50px]  sm:w-[50px] dark:text-gray-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    </div>
  );
};

export default CartIcon;
