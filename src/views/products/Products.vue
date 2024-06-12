<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Products</h1>
    <div class="mb-4">
      <label for="sort" class="block text-sm font-medium text-gray-700">Sort by:</label>
      <select id="sort" @change="sortProducts($event)" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
      </select>
    </div>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="product in products" :key="product.id" class="bg-white p-4 shadow-md rounded-lg">
        <img :src="product.thumbnail" :alt="product.title" class="w-full h-32 object-cover rounded-md">
        <h2 class="text-lg font-bold mt-2">{{ product.title }}</h2>
        <p class="text-gray-700">{{ product.description }}</p>
        <p class="text-indigo-600 font-bold mt-2">${{ product.price }}</p>
        <p class="text-gray-500">Category: {{ product.category }}</p>
        <p class="text-gray-500">Brand: {{ product.brand }}</p>
        <p class="text-gray-500">Stock: {{ product.stock }}</p>
        <p class="text-gray-500">Rating: {{ product.rating }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from 'vue';
import { useProductsStore } from '@/stores/products';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Products',
  setup() {
    const productsStore = useProductsStore();
    const route = useRoute();

    const fetchProductsBasedOnRoute = () => {
      const searchQuery = route.query.q as string;
      if (searchQuery) {
        productsStore.searchProducts(searchQuery);
      } else {
        productsStore.fetchProducts();
      }
    };

    onMounted(() => {
      fetchProductsBasedOnRoute();
    });

    watch(() => route.query.q, fetchProductsBasedOnRoute);

    const sortProducts = (event: Event) => {
      const value = (event.target as HTMLSelectElement).value;
      const [sortBy, order] = value.split('-');
      productsStore.sortProducts(sortBy, order);
    };

    return {
      products: productsStore.products,
      loading: productsStore.loading,
      sortProducts,
    };
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>
