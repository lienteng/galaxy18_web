import { defineStore } from 'pinia';
import { API_ENDPOINT } from '@/api/api';
import { AuthState, setUser, setToken, removeUser, removeToken } from '../utils/localStorageUtil';

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: localStorage.getItem('token'),
    error: null,
    user: JSON.parse(localStorage.getItem('user') || 'null'),
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
          this.user = data;
          this.token = data.token;
          this.error = null;
          setUser(this.user);
          setToken(this.token!);
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
    },
  },
});
