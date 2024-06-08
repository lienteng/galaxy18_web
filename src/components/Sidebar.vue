<template>
    <div class="w-64 bg-white shadow-md h-full">
      <div class="p-4 flex items-center">
        <img src="@/assets/logo.jpg" alt="Logo" class="h-8 mr-2">
        <span class="text-xl font-bold">Modernize</span>
      </div>
      <nav class="mt-4">
        <ul>
          <li class="px-4 py-2">
            <router-link to="/" class="flex items-center space-x-2">
              <span class="material-icons">home</span>
              <span>Home</span>
            </router-link>
          </li>
          <li class="px-4 py-2">
            <router-link to="/ecommerce" class="flex items-center space-x-2">
              <span class="material-icons">shopping_cart</span>
              <span>eCommerce</span>
            </router-link>
          </li>
          <!-- Add more links as necessary -->
        </ul>
      </nav>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({});
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  