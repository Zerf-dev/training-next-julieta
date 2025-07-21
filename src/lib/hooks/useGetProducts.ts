import { useState, useEffect } from "react";
import { Product } from "@/lib/types/product";
import { getAllProducts } from "@/lib/services/platzi";
import { getProductsByCategory } from "@/lib/services/platzi";


export function useGetProducts(page = 1, categoryId: number | null = null) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetcher = async () => {
      try {
        const data = categoryId
          ? await getProductsByCategory(categoryId)
          : await getAllProducts();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || 'Error fetching products');
      } finally {
        setLoading(false);
      }
    };
    fetcher();
  }, [page, categoryId]);

  return { products, loading, error };
}
