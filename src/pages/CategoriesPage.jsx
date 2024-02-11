import Navbar from "../components/productsPage/Navbar";
import ProductsLayout from "../layouts/ProductsLayout";
import ProductsGrid from "../layouts/ProductsGrid";
import Carrito from "../components/productsPage/Carrito/Carrito";
import { useParams } from "react-router-dom";
import { useProductosCategory } from "../hooks/api/useProductosCategory";
import CategoriesSidebar from "../components/productsPage/Sidebar/CategoriesSidebar";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import InfiniteScrollLoader from "../components/InfiniteScrollLoader";

const CategoriesPage = () => {

  const { categ } = useParams();
  const { fetchProductsByCategory } =
    useProductosCategory();

  const { data, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["prodsCategories", categ],
    queryFn: async ({ pageParam = 1 }) => fetchProductsByCategory(categ, pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      } else {
        return null;
      }
    }
  });


  const productsCategory = data?.pages.reduce((prevProds, page) => prevProds.concat(page.results), [])


  return (
    <div className="flex flex-col min-h-screen justify-center">
      <Navbar />
      <CategoriesSidebar />
      <Carrito />
      <ProductsLayout >
        <InfiniteScroll
          dataLength={productsCategory ? productsCategory.length : 0}
          loader={
            <InfiniteScrollLoader />
          }
          hasMore={hasNextPage | isLoading}
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
