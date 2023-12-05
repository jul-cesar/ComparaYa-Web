import React, { useContext } from "react";
import Lottie from "lottie-react";
import load from "../media/load .json";
import { Products } from "../context/productsContext";

const LoadingProductsSpinner = ({ children }) => {
  const { loadingProducts} = useContext(Products);
  return loadingProducts ? (
    <div className="flex items-center justify-center">
      <Lottie animationData={load} className="w-32 h-32 mt-20 " />
    </div>
  ) : (
    <div>{children}</div>
  );
};
export default LoadingProductsSpinner;
