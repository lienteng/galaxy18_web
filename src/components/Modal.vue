<template>
    <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
        <p class="mb-4">{{ message }}</p>
        <button @click="close" class="bg-indigo-600 text-white px-4 py-2 rounded-md">Close</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent,  } from 'vue';
  
  export default defineComponent({
    name: 'Modal',
    props: {
      show: {
        type: Boolean,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      }
    },
    emits: ['close'],
    methods: {
      close() {
        this.$emit('close');
      }
    }
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  