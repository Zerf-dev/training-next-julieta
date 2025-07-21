import { ProductsScreen } from "@/lib/screens/ProductsScreen";
import { VIEWS, ViewType } from "@/lib/types/viewType";
import { getAllProducts, getProductsByCategory, getAllCategories, getProductsByPage } from '@/lib/services/platzi';


export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    view?: string;
    category?: string;
    page?: string;
    limit?: string;
  }>;
}) {
  const {
    view: viewParam,
    category: categoryParam,
    page: pageParam,
    limit: limitParam,
  } = await searchParams;

  const viewType: ViewType = viewParam && VIEWS.includes(viewParam as ViewType)
    ? (viewParam as ViewType)
    : "grid";

  const categoryId = categoryParam ? Number(categoryParam) : undefined;
  const currentPage = pageParam ? Number(pageParam) : 1;
  const pageLimit  = limitParam ? Number(limitParam) : 6;

  const products = await getProductsByPage(currentPage, pageLimit, categoryId);
  const categories = await getAllCategories();

  return (
    <ProductsScreen
      products={products}
      viewType={viewType}
      categories={categories}
      selectedCategoryId={categoryId}
      currentPage={currentPage}
      pageLimit={pageLimit}
    />
  );
}


