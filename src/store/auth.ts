import { create } from 'zustand';

export interface User {
  name : string;
  image : string;
}
interface Auth {
  isAuthenticated: boolean;
  clinte : string;
  user : User;
}

export const useAuth = create<Auth>((set) => {
  return {
    isAuthenticated: false,
    user : {
      name : 'Vitor Emanuel',
      image :''
    },
    clinte : ""
  }
})
