import { useState, useEffect } from 'react';
import { getAllCategories } from '@/lib/services/platzi';
import { Category } from '@/lib/types/category';

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState<string | null>(null);

  useEffect(() => {
    getAllCategories()
      .then(data => setCategories(data))
      .catch(err => setError(err.message || 'Error cargando categorías'))
      .finally(() => setLoading(false));
  }, []); 

  return { categories, loading, error };
}