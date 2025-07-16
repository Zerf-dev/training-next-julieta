import { getAllProducts } from "@/lib/services/platzi";
import { ProductsScreen } from "@/lib/screens/ProductsScreen";
import { VIEWS, ViewType } from "@/lib/types/viewType";


// export default async function Page({ searchParams }: { searchParams: { view?: string } }) {
//   const products = await getAllProducts();
//   const viewParam = searchParams.view;
//   const viewType: ViewType = VIEWS.includes(viewParam as ViewType) ? (viewParam as ViewType) : "grid";
//   return <ProductsScreen products={products} viewType={viewType} />;
// }

export default async function Page({ searchParams }: { searchParams: any }) {
  const products = await getAllProducts();
  const params = await searchParams;
  const viewParam = params.view;
  const viewType: ViewType = VIEWS.includes(viewParam as ViewType) ? (viewParam as ViewType) : "grid";
  return <ProductsScreen products={products} viewType={viewType} />;
}