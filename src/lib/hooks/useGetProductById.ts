import { useState, useEffect } from "react";
import { Product } from "@/lib/types/product";
import { getProductById } from "@/lib/services/platzi";

export function useGetProductById(productId: number | null) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    if (productId === null) {
      setProduct(null);
      setError(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    getProductById(productId)
      .then((data) => {
        if (isMounted) {
          setProduct(data);
        }
      })
      .catch((err: any) => {
        if (isMounted) {
          setError(err?.message || "Error fetching product details");
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [productId]);

  return { product, loading, error };
}
