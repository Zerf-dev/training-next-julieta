'use client';
import React, { useEffect, useState } from 'react';
import ProductCardGridView from '@/components/ProductCardGridView';
import { Product, getAllProducts } from '@/lib/services/platzi';

export default function FavoritesViewPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      let updated;
      if (prev.includes(id)) {
        updated = prev.filter(favId => favId !== id);
      } else {
        updated = [...prev, id];
      }
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  if (loading) return <p className="text-center p-4">Cargando productos…</p>;


  const favoriteProducts = products.filter(prod => favorites.includes(prod.id));
  const productCards = favoriteProducts.map(prod => ({
    id: prod.id,
    image: prod.images[0],
    title: prod.title,
    description: prod.description,
    price: prod.price,
    isFavorite: true,
    onFavoriteToggle: () => toggleFavorite(prod.id)
  }));

  return (
    <>
      <h2 className="text-2xl font-bold text-center my-6">MY FAVORITES</h2>
      {productCards.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              stroke="#FF4500"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
          <p className="mt-6 text-center text-base">You have no favorites...yet<br/>Tap like to save your favorites in one place</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          <ProductCardGridView products={productCards} />
        </div>
      )}
    </>
  );
}
