<template>
  <div class="profile-page">
    <div class="profile-card">
      <img :src="user?.image" alt="Profile Image" class="profile-image" v-if="user?.image" />
      <h2>{{ user?.username }}</h2>
      <p><strong>First Name:</strong> {{ user?.firstName }}</p>
      <p><strong>Last Name:</strong> {{ user?.lastName }}</p>
      <p><strong>Email:</strong> {{ user?.email }}</p>
      <p><strong>Gender:</strong> {{ user?.gender }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAuthStore } from '@/stores/user';

export default defineComponent({
  name: 'Profile',
  setup() {
    const authStore = useAuthStore();
    const user = authStore.user;

    return { user };
  },
});
</script>

<style scoped>
.profile-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.profile-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}
</style>
