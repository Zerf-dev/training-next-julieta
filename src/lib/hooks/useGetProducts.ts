import { useState, useEffect } from "react";
import { Product } from "@/lib/types/product";
import { getAllProducts } from "@/lib/services/platzi";

export function useGetProducts(page = 1) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getAllProducts(page) // Modifica tu service para aceptar página si es necesario
      .then(data => setProducts(data))
      .catch(() => setError("Error fetching products"))
      .finally(() => setLoading(false));
  }, [page]);

  return { products, loading, error };
}