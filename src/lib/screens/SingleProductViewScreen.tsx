'use client';

import { Product } from '@/lib/types/product';
import Image from 'next/image';
import { ChevronLeft, Heart } from 'lucide-react';

export type SingleProductViewScreenProps = {
  product: Product | null;         
  onBack: () => void;           
  onToggleFavorite: (id: number) => void; 
  loading?: boolean;              
  error?: string;                   
};


export default function SingleProductViewScreen({
  product,
  onBack,
  onToggleFavorite,
  loading = false,
  error,
}: SingleProductViewScreenProps) {
  return (
    <div className="max-w-2xl mx-auto space-y-6 p-4">
      <header className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center text-gray-700 hover:text-gray-900"
        >
          <ChevronLeft size={24} />
          <span className="ml-2 text-base">Volver</span>
        </button>
        <button
          onClick={() => product && onToggleFavorite(product.id)}
          aria-label="Alternar favorito"
          className="text-gray-700 hover:text-red-500"
        >
          <Heart size={24} />
        </button>
      </header>

      {loading && (
        <div className="p-4 text-center text-gray-500">Cargando producto...</div>
      )}
      {error && (
        <div className="p-4 text-center text-red-500">Error: {error}</div>
      )}

      {!loading && !error && product && (
        <>
          <div className="w-full rounded-lg overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.title}
              width={800}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-normal text-gray-900">
              {product.title}
            </h1>
            <p className="text-gray-500 text-base">
              {product.description}
            </p>
          </div>
          {product.sizes && (
            <div className="flex items-center space-x-3">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="px-3 py-1 border border-gray-300 rounded-full text-sm text-gray-700"
                >
                  {size}
                </span>
              ))}
            </div>
          )}

          <div>
            <span className="text-xl font-semibold text-[#DF4726]">
              ${product.price}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
