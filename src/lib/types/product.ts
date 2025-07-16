export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
    sizes?: string[]; 
    isFavorite?: boolean;
  };