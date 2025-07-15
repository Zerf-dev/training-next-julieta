'use client';
import { useFavoriteProducts } from "@/lib/hooks/useFavoriteProducts" ; 
import { Product } from "@/lib/types/product" ; 
import { Category } from "@/lib/types/category" ; 

type Props = {
  products: Product[];
  categories?: Category[];
};

export function ListViewScreen({ products, categories }: Props) {
  const { favorites, toggleFavorite } = useFavoriteProducts(products);

  return (
    <div>
      {products.map(prod => (
        <div key={prod.id} style={{ borderBottom: "1px solid #eee", padding: 8 }}>
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