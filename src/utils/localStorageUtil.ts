
export const setUser = (user: any) => {
    window.localStorage.setItem('user', JSON.stringify(user));
  };
  
  export const getUser = () => {
    const user = window.localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };
  
  export const setToken = (token: string | null) => {
    if (token !== null) {
      window.localStorage.setItem('token', token);
    } else {
      window.localStorage.removeItem('token');
    }
  };
  
  export const getToken = () => {
    return window.localStorage.getItem('token');
  };
  
  export const removeUser = () => {
    window.localStorage.removeItem('user');
  };
  
  export const removeToken = () => {
    window.localStorage.removeItem('token');
  };
  