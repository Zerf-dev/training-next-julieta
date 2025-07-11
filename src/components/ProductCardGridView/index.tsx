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
}

interface ProductCardGridViewProps {
  products: Product[];
}

export default function ProductCardGridView({ products }: ProductCardGridViewProps) {
  return (
    <>
      {products.map(product => (
        <article
          key={product.id}
          className="bg-white rounded-2xl shadow-md p-2 sm:p-4 flex flex-col h-full"
        >
          <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
            <ProductImage src={product.image} alt={product.title} />
            <FavoritesButton isFavorite={product.isFavorite} onClick={product.onFavoriteToggle} />
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
    </>
  );
} 