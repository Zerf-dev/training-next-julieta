import React from 'react';
import FavoritesButton from '../Common/FavoritesButton';
import ProductImage from '../Common/ProductImage';

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  sizes?: string[]; // ['S', 'M', 'L']
}

interface ProductCardListViewProps {
  products: Product[];
}

export default function ProductCardListView({ products }: ProductCardListViewProps) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 p-2 sm:p-4">
      {products.map(product => {
        // Usa talles del producto o, si no los hay, muestra ['S','M','L']
        const availableSizes = product.sizes ?? ['S', 'M', 'L'];

        return (
          <div
            key={product.id}
            className="relative flex items-center gap-4 bg-white rounded-2xl shadow-md p-4"
          >
            {/* Botón de favoritos arriba a la derecha */}
            <div className="absolute top-2 right-2 z-10">
              <FavoritesButton
                isFavorite={product.isFavorite}
                onClick={product.onFavoriteToggle}
              />
            </div>

            <div className="w-24 h-24 flex-shrink-0">
              <ProductImage src={product.image} alt={product.title} />
            </div>

            <div className="flex-1 flex flex-col justify-between h-full">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-500 text-base line-clamp-1">{product.description}</p>

              {/* Talles entre descripción y precio */}
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

              {/* Precio */}
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
