
export const useProductosCategory = () => {
  const fetchProductsByCategory = async (category, page) => {
    try {
      const response = await fetch(
        `https://api-compara-ya-jul-cesars-projects.vercel.app/productos/${category}/${page}/24`
      );
      const fetchedCategories = await response.json();
      return fetchedCategories;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    fetchProductsByCategory,
  };
};
