import { useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const response = await fetch(`http://localhost:4000/categorias`);
      const fetchedCategories = await response.json();
      setCategories(fetchedCategories);
    } catch (error) {
      console.error("Failed to fetch cats:", error);
    }
  };
  return {
    categories,
    getCategories
  };
};
