// src/models/productInterfaces.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}
