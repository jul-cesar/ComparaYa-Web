import { useState } from "react";

export const useGetCategory = () => {
    const [category, setCategory] = useState({});
    
  const getCategory = async (categor) => {
    try {
      const response = await fetch(
        `https://api-compara-ya-jul-cesars-projects.vercel.app/categorias/${categor}`
      );
      const fetchedCategories = await response.json();
      setCategory(fetchedCategories);
    } catch (error) {
      console.error("Failed to fetch cats:", error);
    }
  };

  return {
    getCategory,
    category
  };
};
