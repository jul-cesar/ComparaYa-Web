import React, { useContext, useEffect, useRef } from "react";
import { getComparations } from "../../../api/productsFetching";
import { Products } from "../../../context/productsContext";


const LupaIcon = ({product}) => {
  const {setComparationItems} = useContext(Products)
  return (
    <div onClick={()=>getComparations(product, setComparationItems)}>
      XD
    </div>
  );
};

export default LupaIcon;
