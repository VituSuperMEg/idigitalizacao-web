import { create } from 'zustand';

interface Auth {
  isAuthenticated : boolean;
  onLogin : (usuario : string , password : string) => void;
}

export const useAuth = create<Auth>((set) => {
  return {
   isAuthenticated: false, 
  }
})