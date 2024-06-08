
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { API_ENDPOINT } from '@/api/api'; 
import { setUser, setToken, removeUser, removeToken } from '@/utils/localStorageUtil'; 

interface AuthState {
  token: string | null;
  error: string | null;
  user: any;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: null,
    error: null,
    user: null,
  }),
  actions: {
    async login(username: string, password: string) {
      try {
        const response = await fetch(`${API_ENDPOINT}auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username,
            password,
            expiresInMins: 30,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          console.log(data);
          this.user = data;
          this.token = data.token;
          this.error = null;
          setUser(this.user);
          if (this.token !== null) {
            setToken(this.token);
          }

          // const router = useRouter();
          // router.push({ name: 'Home' });
        } else {
          this.token = null;
          this.error = data.message || 'Login failed';
        }
      } catch (error) {
        this.token = null;
        this.error = 'Login failed';
      }
    },
    logout() {
      this.token = null;
      this.user = null;
      removeUser(); 
      removeToken(); 
      const router = useRouter();
      router.push({ name: 'Login' });
    },
  },
});
