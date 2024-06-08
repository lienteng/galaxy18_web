<template>
  <div id="app">
    <div class="app-container bg-light">
    <nav v-show="authStore.user" class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <a @click="authStore.logout" class="nav-item nav-link">Logout</a>
      </div>
    </nav>
    <div class="container pt-4 pb-4">
      <router-view />
    </div>
  </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '@/stores/user';

export default defineComponent({
  name: 'App',
  setup() {
    const authStore = useAuthStore();
    return {
      authStore
    };
  }
});
</script>

<style>
/* Add your styles here */
</style>
