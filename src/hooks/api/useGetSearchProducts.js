
export const useGetSearchProducts = () => {

  const getSearchProds = async (query, page) => {
    const BASE_API_URL =
      "https://api-compara-ya-git-main-jul-cesars-projects.vercel.app/productos/search";
    try {
      const result = await fetch(`${BASE_API_URL}/${query}/${page}/8`);
      const response = await result.json();
      return response
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  return {
    getSearchProds,
  };
};
