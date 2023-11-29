import React, { useContext } from "react";
import { UseFormatPrice } from "../../../hooks/useFormatPrice";
import { Products } from "../../../context/productsContext";
import { toast } from "sonner";
import DistribuidoraTag from "../../DistribuidoraTag";

const CardProduct = ({
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
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="m-10 object-cover h-48 w-48 rounded-t-lg max-w-full align-middle italic bg-no-repeat bg-cover ms"
        src={img}
        alt={img}
      />

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {nombre}
          </h5>
        </a>
        <DistribuidoraTag precio_d1={precio_d1} precio_exito={precio_exito} precio_olim={precio_olim}/>
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
                toast.success('Producto agregado al carrito')
              }}
              className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Comparar
            </a>
          </div>
        </div>
      </div>
    
    </div>
    
  );
};

export default React.memo(CardProduct);
