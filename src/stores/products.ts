import { defineStore } from 'pinia';
import { API_ENDPOINT } from '@/api/api';
import { ProductsState } from '@/models/product_interfaces';

export const useProductsStore = defineStore('products', {
  state: (): ProductsState => ({
    products: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const res = await fetch(`${API_ENDPOINT}products`);
        const data = await res.json();
        this.products = data.products;
      } catch (error) {
        this.error = 'Error fetching products';
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
      }
    },
    async searchProducts(query: string) {
      this.loading = true;
      try {
        const res = await fetch(`${API_ENDPOINT}products/search?q=${query}`);
        const data = await res.json();
        this.products = data.products;
      } catch (error) {
        this.error = 'Error searching products';
        console.error('Error searching products:', error);
      } finally {
        this.loading = false;
      }
    },
  },
});
