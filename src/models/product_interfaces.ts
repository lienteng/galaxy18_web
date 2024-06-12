export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  thumbnail?: string;
  category?: string;
  brand?: string;
  stock?: number;
  rating?: number;
}

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}
