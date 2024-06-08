<!-- <template>
  <div id="app">
    <div class="app-container bg-light">
    <nav v-show="authStore.user" class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav flex justify-between w-full">
        <router-link to="/" class="nav-item nav-link">
          <img src="@/assets/logo.jpg" alt="Logo" class="h-8">
        </router-link>
        <router-link to="/dashboard" class="nav-item nav-link">Dashboard</router-link>
        <router-link to="/profile" class="nav-item nav-link">Profile</router-link>
        <router-link to="/users" class="nav-item nav-link">Users</router-link>
        <router-link to="/posts" class="nav-item nav-link">Posts</router-link>
        <router-link to="/comments" class="nav-item nav-link">Comments</router-link>
        <a @click="authStore.logout" class="nav-item nav-link">Logout</a>
      </div>
    </nav>
    <div class="container pt-4 pb-4">
      <router-view />
    </div>
  </div>
  </div>

</template> -->


<template>
  <div id="app" class="flex h-screen bg-gray-100">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <Navbar />
      <main class="p-4 flex-1 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
export default defineComponent({
  components: {
    Sidebar,
    Navbar,
  },
});
</script>

<style>
/* Add your styles here */
</style>


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
