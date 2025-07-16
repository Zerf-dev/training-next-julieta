'use client';
import { useFavoriteProducts } from "@/lib/hooks/useFavoriteProducts" ; 
import { Product } from "@/lib/types/product"; 
import { Category } from "@/lib/types/category";
import ProductImage from "@/components/Common/ProductImage";
import FavoritesButton from "@/components/Common/FavoritesButton";

type Props = {
  products: Product[];
  columns: number;
  onlyFavorites?: boolean;
  categories?: Category[];
};

export function GridViewScreen({ products, columns, onlyFavorites = false, categories }: Props) {
  const { favoriteProducts, favorites, toggleFavorite } = useFavoriteProducts(products);


  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 16,
      }}
    >
      {products.map(product => (
        <article
          key={product.id}
          className="bg-white rounded-2xl shadow-md p-2 sm:p-4 flex flex-col h-full"
        >
          <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
            <ProductImage src={product.images[0]} alt={product.title} />
            <FavoritesButton id={product.id} className="absolute top-2 right-2 text-red-500" />
          </div>
          <div className="mt-4 flex-1 flex flex-col">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-1">{product.title}</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 mb-2 overflow-hidden" style={{maxHeight: '3.6em'}}>
              {product.description}
            </p>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-orange-600 mt-auto">${product.price}</span>
          </div>
        </article>
      ))}
    </div>
  );
}