// export interface AuthState {
//     token: string | null;
//     error: string | null;
//     user: any;
//   }


  export interface AuthState {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string | null;
    refreshToken: string;
  }