'use client';
import { useFavoriteProducts } from "@/lib/hooks/useFavoriteProducts" ; 
import { Product } from "@/lib/types/product" ; 
import { Category } from "@/lib/types/category" ; 
import ProductImage from "@/components/Common/ProductImage";
import FavoritesButton from "@/components/Common/FavoritesButton";

type Props = {
  products: Product[];
  categories?: Category[];
  loading?: boolean;
  error?: string | null;
  onCardClick: (id: number) => void;
};

export function ListViewScreen({ products, categories, loading, error, onCardClick }: Props) {
  return (
      <div className="flex flex-col gap-3 sm:gap-4 p-2 sm:p-4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {products.map(product => {
          const availableSizes = product.sizes ?? ['S', 'M', 'L'];

          return (
            <div
              key={product.id}
              onClick={() => onCardClick(product.id)}
              className="relative flex items-center gap-4 bg-white rounded-2xl p-4"
            >
              <div className="absolute top-2 right-2 z-10">
                <FavoritesButton id={product.id} className="absolute top-2 right-2 text-red-500"
                />
              </div>

              <div className="w-24 flex-shrink-0">
                <ProductImage src={product.images[0]} alt={product.title} />
              </div>

              <div className="flex-1 flex flex-col justify-between h-full pr-10">
                <h2 className="text-lg">{product.title}</h2>
                <p className="text-gray-400 text-base line-clamp-1">{product.description}</p>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-400 text-base">Size</span>
                  {availableSizes.map(size => (
                    <span
                      key={size}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 text-base"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                <div className="mt-2">
                  <span className="text-xl font-bold text-orange-600">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
