<template>
  <div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
    <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
      <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="login" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address or Username</label>
          <input type="text" v-model="login" id="login" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com or username" required>
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
          <input type="password" v-model="password" id="password" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required>
          <a href="#" class="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot Password?</a>
        </div>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <input type="checkbox" id="remember" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked>
            <label for="remember" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
          </div>
          <a href="#" class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create Account</a>
        </div>
        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
      </form>
      <p v-if="error" class="mt-4 text-red-500">{{ error }}</p>
    </div>
    <Modal v-if="showModal" :show="showModal" title="Login Failed" :message="error" @close="showModal = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/user';
import Modal from '@/components/Modal.vue';

export default defineComponent({
  name: 'Login',
  components: {
    Modal,
  },
  setup() {
    const login = ref('emilys');
    const password = ref('emilyspass');
    const authStore = useAuthStore();
    const error = ref('');
    const showModal = ref(false);
    const router = useRouter();

    const handleLogin = async () => {
      await authStore.login(login.value, password.value);
      if (authStore.error) {
        error.value = authStore.error;
        showModal.value = true;
      } else {
        error.value = '';
        showModal.value = false;
        router.push({ name: 'Home' });
      }
    };

    return {
      login,
      password,
      handleLogin,
      error,
      showModal,
      authStore,
    };
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>
