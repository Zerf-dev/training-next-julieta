'use client';
import React, { useEffect, useState } from 'react';
import ProductCardListView from '@/components/ProductCardListView';
import { Product, getAllProducts } from '@/lib/services/platzi';

export default function ListViewPage() {
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

  const productCards = products.map(prod => ({
    id: prod.id,
    image: prod.images[0],
    title: prod.title,
    description: prod.description,
    price: prod.price,
    isFavorite: favorites.includes(prod.id),
    onFavoriteToggle: () => toggleFavorite(prod.id)
  }));

  return (
    <ProductCardListView products={productCards} />
  );
} 