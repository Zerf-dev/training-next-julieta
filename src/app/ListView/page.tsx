'use client';
import React, { useEffect, useState } from 'react';
import ProductCardListView from '@/components/ProductCardListView';
import { Product, getAllProducts, getAllCategories } from '@/lib/services/platzi';
import FilterButton from '@/components/Common/FilterButton';
import ViewTypeButton from '@/components/Common/ViewTypeButton';

export default function ListViewPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [categories, setCategories] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
    async function loadCategories() {
      const data = await getAllCategories();
      setCategories(data);
    }
    loadCategories();
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
    <>
      <div className="flex justify-end gap-4 mt-4 mb-6 px-4">
        <ViewTypeButton view="list" onClick={() => {}} />
        <FilterButton onClick={() => setFilterOpen(open => !open)} />
      </div>
      {filterOpen && (
        <div className="flex justify-end px-4 mb-4">
          <select
            value={selectedCategory || ''}
            onChange={e => setSelectedCategory(Number(e.target.value))}
            className="border rounded px-3 py-2"
          >
            <option value="">All categories</option>
            {categories.map((cat: any) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
      )}
      <ProductCardListView products={productCards} />
    </>
  );
} 