'use client';
import { useFavoriteProducts } from "@/lib/hooks/useFavoriteProducts" ; 
import { Product } from "@/lib/types/product"; 
import { Category } from "@/lib/types/category";
import ProductImage from "@/components/Common/ProductImage";
import FavoritesButton from "@/components/Common/FavoritesButton";
import clsx from "clsx";

type Props = {
  products: Product[];
  columns: number;
  loading?: boolean;
  error?: string | null;
};

export function GridViewScreen({ products, columns, loading, error }: Props) {
  // console.log("products to show: ", products); 
  
  const gridClasses = clsx(
    'grid gap-4',
    columns === 1
      ? 'grid-cols-1'
      : 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3'
  );
  
  return (
    <div className={gridClasses}>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {products.map(product => (
        <article
          key={product.id}
          className="bg-white rounded-2xl p-2 sm:p-4 flex flex-col h-full"
        >
          <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
            <ProductImage src={product.images[0]} alt={product.title} />
            <FavoritesButton id={product.id} className="absolute top-2 right-2 text-red-500" />
          </div>
          <div className="mt-4 flex-1 flex flex-col">
            <h2 className="text-base sm:text-lg md:text-xl mb-1">{product.title}</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-2 overflow-hidden line-clamp-2" style={{maxHeight: '3.6em'}}>
              {product.description}
            </p>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600 mt-auto">${product.price}</span>
          </div>
        </article>
      ))}
    </div>
  );
}