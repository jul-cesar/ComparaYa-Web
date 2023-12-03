import React, { useEffect, useRef } from "react";
import cart from "../../../media/addAni.json";
import { toast } from "sonner";
import Lottie from "lottie-react";

const CartIcon = ({ product, setProductsInCart, productsInCart }) => {
  const addProductToCart = (product) => {
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
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <a className="text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5  text-center"></a>
      <Lottie
        animationData={cart}
        className="h-[70px] w-[70px] cursor-pointer"
        onClick={() => {
          addProductToCart(product);
          toast.success("Producto agregado al carrito");
        }}
      />
    </div>
  );
};

export default CartIcon;
