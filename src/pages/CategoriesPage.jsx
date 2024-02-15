import Navbar from "../components/productsPage/Navbar";
import ProductsLayout from "../layouts/ProductsLayout";
import ProductsGrid from "../layouts/ProductsGrid";
import Carrito from "../components/productsPage/Carrito/Carrito";
import { useLocation, useParams } from "react-router-dom";
import { useProductosCategory } from "../hooks/api/useProductosCategory";
import CategoriesSidebar from "../components/productsPage/Sidebar/CategoriesSidebar";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import InfiniteScrollLoader from "../components/InfiniteScrollLoader";
import { useContext } from "react";
import { Products } from "@/context/productsContext";
import { ConstructionIcon } from "lucide-react";

const CategoriesPage = () => {

  const { categ } = useParams();
  const { fetchProductsByCategory } =
    useProductosCategory();
  const location = useLocation()
  console.log(location)
  const category = new URLSearchParams(location.search);
  const categoryId = category.get("cid")

  const { data, hasNextPage, fetchNextPage, isLoading, error, isError } = useInfiniteQuery({
    queryKey: ["prodsCategories", categ],
    queryFn: async ({ pageParam = 1 }) => fetchProductsByCategory(categoryId, pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      } else {
        return null;
      }

    }
  });


  const productsCategory = data?.pages.reduce((prevProds, page) => prevProds.concat(page.results), [])

  if (isError) return <h1>Categoria no encontrada</h1>

  return (
    <div className="flex flex-col min-h-screen justify-center">
      <Navbar />
      <CategoriesSidebar />
      <Carrito />
      <ProductsLayout >
        <InfiniteScroll
          dataLength={productsCategory ? productsCategory.length : 0}
          hasMore={hasNextPage }
          loader={<div>
            <div className="px-3 py-4 text-xl font-medium leading-none text-center bg-gray-700-200  animate-pulse">
              Buscando...
            </div>
          </div>}
          next={() =>
            fetchNextPage()
          }
        >
          <ProductsGrid Items={productsCategory} isLoading={isLoading} />
        </InfiniteScroll>
      </ProductsLayout>
    </div>
  );
};

export default CategoriesPage;
