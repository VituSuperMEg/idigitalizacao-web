import { create } from 'zustand';

export interface User {
  name : string;
}
interface Auth {
  isAuthenticated: boolean;
  user : User;
}

export const useAuth = create<Auth>((set) => {
  return {
    isAuthenticated: false,
    user : {
      name : 'ROOT'
    }
  }
})
