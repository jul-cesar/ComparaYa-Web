import { useContext, useEffect } from "react";
import { Products } from "../../context/productsContext";

export const useComparations = () => {
  const { setComparationItems, ComparationItems } = useContext(Products);

  const getComparations = async (product) => {
    try {
      const response = await fetch("http://www.comparaya.somee.com/compare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Product: {
            id: product.id,
            nombre: product.nombre,
            imagen_url: product.imagen_url,
            precio_d1: product.precio_d1,
            precio_olim: product.precio_olim,
            precio_exito: product.precio_exito,
            categoria_id: product.categoria_id,
          },
        }),
      });

      const fetchedComparations = await response.json();
      setComparationItems(fetchedComparations);
      console.log(fetchedComparations);
    } catch (error) {
      console.error("Failed to fetch comps", error);
    }
  };

 

  return { ComparationItems, getComparations };
};
