<template>
  <div class="w-64 bg-white shadow-md h-full">
    <div class="p-4 flex items-center">
      <img src="@/assets/logo.jpg" class="w-8 h-8 rounded-full" alt="Profile Image">
      <span class="text-xl font-bold">Galaxy 18X</span>
    </div>
    <nav class="mt-4">
      <ul>
        <li class="px-4 py-2">
          <router-link to="/" class="flex items-center space-x-2">
            <span class="material-icons">dashboard</span>
          </router-link>
        </li>
        <li class="px-4 py-2">
          <router-link to="/products" class="flex items-center space-x-2">
            <span class="material-icons">products</span>
          </router-link>
        </li>
        <li class="px-4 py-2">
          <router-link to="/users" class="flex items-center space-x-2">
            <span class="material-icons">people</span>
          </router-link>
        </li>
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
