<!-- <template>
  <div id="app" class="flex h-screen bg-gray-100">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <Navbar />
      <main class="p-4 flex-1 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template> -->
<template>
  <div id="app" class="flex h-screen bg-gray-100">
    <Sidebar v-if="isAuthenticated" />
    <div :class="isAuthenticated ? 'flex-1 flex flex-col' : 'flex flex-col w-full'">
      <Navbar v-if="isAuthenticated" />
      <main class="p-4 flex-1 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '@/stores/user';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';

export default defineComponent({
  components: {
    Sidebar,
    Navbar,
  },
  setup() {
    const authStore = useAuthStore();
    return {
      isAuthenticated: authStore.token,
    };
  },
});
</script>

<style>
/* Add your styles here */
</style>
