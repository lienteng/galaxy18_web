// export function setUser(user: any) {
//   localStorage.setItem('user', JSON.stringify(user));
// }

// export function getUser() {
//   const user = localStorage.getItem('user');
//   return user ? JSON.parse(user) : null;
// }

// export function setToken(token: string) {
//   localStorage.setItem('token', token);
// }

// export function getToken() {
//   return localStorage.getItem('token');
// }

// export function removeUser() {
//   localStorage.removeItem('user');
// }

// export function removeToken() {
//   localStorage.removeItem('token');
// }

// src/utils/localStorageUtil.ts
export interface AuthState {
  token: string | null;
  error: string | null;
  user: any;
}

export function setUser(user: any) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function setToken(token: string) {
  localStorage.setItem('token', token);
}

export function removeUser() {
  localStorage.removeItem('user');
}

export function removeToken() {
  localStorage.removeItem('token');
}
