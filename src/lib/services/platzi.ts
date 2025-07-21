import { Product } from '@/lib/types/product';
import { Category } from '@/lib/types/category';
  
  export async function getAllProducts(): Promise<Product[]> {
    const res = await fetch('https://api.escuelajs.co/api/v1/products');
    if (!res.ok) throw new Error(`Error al cargar productos (${res.status})`);
    return res.json();
  }

  export async function getAllCategories(): Promise<Category[]> {
    const res = await fetch(
      'https://api.escuelajs.co/api/v1/categories'
    );
    if (!res.ok) throw new Error(`Error al cargar categorías (${res.status})`);
    return res.json();
  }
  
  export async function getProductsByCategory(id: number): Promise<Product[]> {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/categories/${id}/products`
    );
    if (!res.ok)
      throw new Error(`Error al cargar productos de categoría ${id} (${res.status})`);
    return res.json();
  }

  export async function getProductsByPage( page: number, limit: number, categoryId?: number): Promise<Product[]> {
    const offset = (page - 1) * limit;
    const params = new URLSearchParams({
      offset: String(offset),
      limit: String(limit),
    });
    const url = categoryId
      ? `${"https://api.escuelajs.co/api/v1"}/categories/${categoryId}/products?${params}`
      : `${"https://api.escuelajs.co/api/v1"}/products?${params}`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Error cargando página de productos (${res.status})`);
    }
    return res.json();
  }
  

  export async function getProductById(id: number): Promise<Product> {
    const res = await fetch(`https://fakeapi.platzi.com/en/rest/products/${id}`);
    if (!res.ok) throw new Error(`Producto ${id} no encontrado (${res.status})`);
    return res.json();
  }
  

  export async function getProductBySlug(slug: string): Promise<Product> {
    const res = await fetch(
      `https://fakeapi.platzi.com/en/rest/products/slug/${slug}`
    );
    if (!res.ok)
      throw new Error(`Producto slug=${slug} no encontrado (${res.status})`);
    return res.json();
  }
  