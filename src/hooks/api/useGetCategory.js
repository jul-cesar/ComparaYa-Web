import { useState } from "react";

export const useGetCategory = () => {


  const getCategory = async (categor) => {
    try {
      const response = await fetch(
        `https://api-compara-ya-jul-cesars-projects.vercel.app/categorias/${categor}`
      );
      const fetchedCategories = await response.json();
      return fetchedCategories
    } catch (error) {
      console.error("Failed to fetch cats:", error);
    }
  };

  return {
    getCategory,

  };
};
