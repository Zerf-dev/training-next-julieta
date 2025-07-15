'use client';
import { useFavoriteProducts } from "@/lib/hooks/useFavoriteProducts" ; 
import { Product } from "@/lib/types/product"; 
import { Category } from "@/lib/types/category";

type Props = {
  products: Product[];
  columns: number;
  onlyFavorites?: boolean;
  categories?: Category[];
};

export function GridViewScreen({ products, columns, onlyFavorites = false, categories }: Props) {
  const { favoriteProducts, favorites, toggleFavorite } = useFavoriteProducts(products);

  const productsToShow = onlyFavorites ? favoriteProducts : products;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 16,
      }}
    >
      {productsToShow.map(prod => (
        <div key={prod.id} style={{ border: "1px solid #eee", padding: 16 }}>
          <strong>{prod.title}</strong>
          <button onClick={() => toggleFavorite(prod.id)} style={{ marginLeft: 8 }}>
            {favorites.includes(prod.id) ? "★" : "☆"}
          </button>
          <div>{prod.description}</div>
        </div>
      ))}
    </div>
  );
}