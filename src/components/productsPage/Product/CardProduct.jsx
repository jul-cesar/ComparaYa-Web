import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { UseFormatPrice } from "../../../hooks/useFormatPrice";
import { Products } from "../../../context/productsContext";
import { toast } from "sonner";
import DistribuidoraTag from "../../DistribuidoraTag";
import Lottie from "lottie-react";
import lupa from "../../../media/lupa2.json";
import cart from "../../../media/addAni.json";
import lottie from "lottie-web";
const CardProduct = React.memo(({
  img,
  nombre,
  precio_exito,
  precio_olim,
  precio_d1,
  product,
}) => {
  const { productsInCart, setProductsInCart, products } = useContext(Products);
  const formattedExitoPrice = UseFormatPrice(precio_exito);
  const formattedOlimPrice = UseFormatPrice(precio_olim);
  const formattedD1Price = UseFormatPrice(precio_d1);
  const [isCartHovered, setCartHovered] = useState(false);
  const [isLupaHovered, setLupaHovered] = useState(false);

  const containerCart = useRef(null);
  const containerLupa = useRef(null);

  useEffect(() => {
    const cartAnimation = lottie.loadAnimation({
      container: containerCart.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: cart,
    });
    setCartHovered(cartAnimation);
    return () => {
      cartAnimation.destroy();
    };
  }, []);

  useEffect(() => {
    const lupaAnimation = lottie.loadAnimation({
      container: containerLupa.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: lupa,
    });
    setLupaHovered(lupaAnimation);
    return () => {
      lupaAnimation.destroy();
    };
  }, []);

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
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex flex-col items-center">
        <img
          className="object-cover m-10 h-52 w-48 rounded-t-lg max-w-full mb-5"
          src={img}
          alt={img}
        />
      </div>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {nombre}
          </h5>
        </a>
        <DistribuidoraTag
          precio_d1={precio_d1}
          precio_exito={precio_exito}
          precio_olim={precio_olim}
        />

        <div className="flex items-center justify-between">
          {precio_exito > 0 && (
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {formattedExitoPrice}
            </span>
          )}

          {precio_olim > 0 && (
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {formattedOlimPrice}
            </span>
          )}
          {precio_d1 > 0 && (
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {formattedD1Price}
            </span>
          )}
          <div className="flex flex-col items-center gap-3">
            <a
              onClick={() => {
                addProductToCart(product);
                toast.success("Producto agregado al carrito");
              }}
              className="text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <div
                className="h-[70px] w-[70px]"
                ref={containerCart}
                onMouseEnter={() => {
                  isCartHovered.play();
                }}
                onMouseLeave={() => {
                  isCartHovered.stop();
                }}
              />
            </a>
            <a
              href="#"
              className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <div
                className="h-[70px] w-[70px]"
                ref={containerLupa}
                onMouseEnter={() => {
                  isLupaHovered.play();
                }}
                onMouseLeave={() => {
                  isLupaHovered.stop();
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CardProduct;
