import { useState, useEffect } from "react";
import { Product } from "@/lib/types/product";

export function useFavoriteProducts(products: Product[]) {
  const [favorites, setFavorites] = useState<number[]>([]);


  useEffect(() => {
    const stored = localStorage.getItem("favorites");
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
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };


  const favoriteProducts = products.filter(prod => favorites.includes(prod.id));

  return { favoriteProducts, favorites, toggleFavorite };
}