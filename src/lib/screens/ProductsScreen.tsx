'use client';
import { useState } from "react";
import { Product } from "@/lib/types/product";
import { Category } from "@/lib/types/category";
import { useFavoriteProducts } from "@/lib/hooks/useFavoriteProducts";
import { GridViewScreen } from "./GridViewScreen";
import { ListViewScreen } from "./ListViewScreen";
import { ViewType } from "@/lib/types/viewType";
import ViewTypeButton from "@/components/Common/ViewTypeButton";
import FilterButton from "@/components/Common/FilterButton/index";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DEFAULT_VIEW: ViewType = "grid";
const DEFAULT_TOTAL_PAGES = 5;


type Props = {
  products: Product[];
  viewType?: ViewType; 
  categories: Category[];
  selectedCategoryId: number | undefined;
  currentPage?: number ;
  pageLimit?: number;
  totalPages?: number;
  pageSize?: number;
};

export function ProductsScreen({ 
  products, 
  viewType = DEFAULT_VIEW, 
  categories, 
  selectedCategoryId, 
  currentPage = 1, 
  pageLimit, 
  totalPages = DEFAULT_TOTAL_PAGES, 
  pageSize }: Props) {

  const { favorites, toggleFavorite, favoriteProducts } = useFavoriteProducts(products);
  const [filterOpen, setFilterOpen]   = useState(false)
  const router = useRouter() ; 
  const searchParams = useSearchParams();
  const view = searchParams.get('view') || DEFAULT_VIEW 
  const selectedCategory = searchParams.get('category') || null;  
  const params = new URLSearchParams(searchParams.toString())
  
  const handleSelectView = (nextView : string) => {
    params.set('view', nextView) ; 
    router.push(`/?${params.toString()}`) ; 
  }

  const handleSelectCategory = (cat: Category) => {
    console.log('Seleccionaste:', cat.id)
    params.set('category', cat.id.toString()) ;
    params.set('page', '1') ; 
    router.push(`/?${params.toString()}`) ;
    setFilterOpen(false) ; 
  }

  const baseProducts =
    view === 'favorites' ? favoriteProducts : products

  const productsToShow = selectedCategory
    ? baseProducts.filter((p) => p.category.id.toString() === selectedCategory)
    : baseProducts

  const selectedCategoryName = categories.find(
    (c) => c.id.toString() === selectedCategory) ?.name;

  const buildHref = (page: number) => {
    const qs: string[] = [];
    qs.push(`page=${page}`);
    // si quieres mantener el tamaño de página
    qs.push(`limit=${pageLimit}`);
    // si tienes distintas vistas (grid/list/favorites)
    if (viewType) {
      qs.push(`view=${viewType}`);
    }
    // si está filtrada por categoría
    if (selectedCategoryId != null) {
      qs.push(`category=${selectedCategoryId}`);
    }
    return `?${qs.join('&')}`;
  };

  const filters = [];
  if (selectedCategoryId) {
    filters.push({
      label: selectedCategoryName,
      onRemove: () => {
        params.delete('category');
        params.set('page', '1');
        router.push(`/?${params.toString()}`);
      }
    });
  }

  return (
    <div>
      <div className="flex items-center justify-end pr-6 mb-6 mt-4 gap-x-4">
       <ViewTypeButton 
            view={view} 
            onChange={handleSelectView} 
        />
       <FilterButton 
            open={filterOpen}
            onToggle={() => setFilterOpen(o => !o)}
            categories={categories}
            onSelect={handleSelectCategory}
        />
    </div>
    {filters.length > 0 && (
    <div className="flex flex-wrap gap-2 mb-6 px-6">
      {filters.map(({ label, onRemove }) => (
        <span
          key={label}
          className="flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-1 text-sm text-gray-800"
        >
          <span>{label}</span>
          <button
            onClick={onRemove}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </span>
      ))}
    </div>
      )}
      {view === "grid" && (
        <GridViewScreen
          products={productsToShow}
          columns={3}
        />
      )}
      {view === "list" && (
        <ListViewScreen
          products={productsToShow}
        />
      )}
      {view === "fullgrid" && (
        <GridViewScreen
          products={productsToShow}
          columns={1}
        />
      )}
      {view === "favorites" && (
        <GridViewScreen
          products={productsToShow}
          columns={3}
        />
      )}
      <nav className="flex items-center justify-center space-x-3 my-8">
        <Link
          href={currentPage > 1 ? buildHref(currentPage - 1) : '#'}
          className={`
            flex items-center justify-center
            w-10 h-10
            rounded-full border-2
            ${currentPage > 1
              ? 'border-gray-300 text-gray-500 hover:bg-gray-100'
              : 'border-gray-200 text-gray-200 cursor-not-allowed'}
          `}
        >
          <ChevronLeft size={16} />
        </Link>
        {Array.from({ length: totalPages }).map((_, i) => {
          const p = i + 1;
          const isActive = p === currentPage;
          return (
            <Link
              key={p}
              href={buildHref(p)}
              className={`
                w-10 h-10
                flex items-center justify-center
                rounded-full border-2
                ${isActive
                  ? 'bg-[#DF4726] border-[#DF4726] text-white'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-100'}
              `}
            >
              {p}
            </Link>
          );
        })}

        <Link
          href={currentPage < totalPages ? buildHref(currentPage + 1) : '#'}
          className={`
            flex items-center justify-center
            w-10 h-10
            rounded-full border-2
            ${currentPage < totalPages
              ? 'border-gray-300 text-gray-500 hover:bg-gray-100'
              : 'border-gray-200 text-gray-200 cursor-not-allowed'}
          `}
        >
          <ChevronRight size={16} />
        </Link>
      </nav>
    </div>
  );
}