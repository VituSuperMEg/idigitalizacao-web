import { useRouter } from 'next/router';
import { create } from 'zustand';

export interface User {
  name: string;
  image: string;
}

export interface Client {
  estado: string;
  municipio: string;
  entidade: string;
  cod_ibge : string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User;
  client: Client;
  setClient: (newClient: Partial<Client>) => void;
  loggerClient : (cod : string) => void;

}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: {
    name: 'Vitor Emanuel',
    image: ''
  },
  client: {
    estado: '',
    municipio: '',
    entidade : '',
    cod_ibge: ''
  },
  setClient: (newClient) =>
    set((state) => ({
      ...state,
      client: {
        ...state.client,
        ...newClient
      }
    })),
    loggerClient: (cod) =>
      set((state) => ({
        ...state,
        client : {
          ...state.client,
          cod_ibge : cod
        }
      }))
}));
