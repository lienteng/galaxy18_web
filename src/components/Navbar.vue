<template>
  <nav class="bg-white shadow-md flex items-center justify-between p-4">
    <div class="flex items-center space-x-4">
      <input
        v-model="searchQuery"
        @keyup.enter="handleSearch"
        type="text"
        placeholder="Search products..."
        class="border rounded px-2 py-1 w-full"
      />
    </div>
    <div class="flex items-center space-x-4">
      <button class="material-icons">
        <img src="@/assets/notification.svg" class="w-7 h-7" alt="Notification">
      </button>
      <div class="relative">
        <button @click="toggleDropdown">
          <img src="@/assets/profile.jpeg" class="w-8 h-8 rounded-full" alt="Profile Image">
        </button>
        <div v-if="showDropdown" class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <a @click="goToProfile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Profile</a>
          <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/user';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const showDropdown = ref(false);
    const router = useRouter();
    const authStore = useAuthStore();
    const searchQuery = ref('');

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value;
    };

    const goToProfile = () => {
      showDropdown.value = false;
      router.push({ name: 'Profile' });
    };

    const logout = () => {
      showDropdown.value = false;
      authStore.logout();
      router.push({ name: 'Login' });
    };

    const handleSearch = () => {
      if (searchQuery.value.trim()) {
        router.push({ name: 'Products', query: { q: searchQuery.value } });
      }
    };

    return {
      showDropdown,
      toggleDropdown,
      goToProfile,
      logout,
      searchQuery,
      handleSearch,
    };
  },
});
</script>

<style scoped>
/* Add your styles here */
</style>
