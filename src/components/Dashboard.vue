<template>
    <div>
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div class="bg-blue-100 p-4 rounded">
          <h2 class="text-lg">Employees</h2>
          <p class="text-2xl">96</p>
        </div>
        <div class="bg-yellow-100 p-4 rounded">
          <h2 class="text-lg">Clients</h2>
          <p class="text-2xl">3,650</p>
        </div>
        <div class="bg-red-100 p-4 rounded">
          <h2 class="text-lg">Projects</h2>
          <p class="text-2xl">356</p>
        </div>
      </div>
      <div class="bg-white p-4 rounded shadow-md">
        <h2 class="text-lg mb-2">Revenue Updates</h2>
        <p class="text-2xl">$63,489.50</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({});
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  