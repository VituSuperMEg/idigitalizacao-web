import { useRouter } from 'next/router';
import { create } from 'zustand';

export interface User {
  name: string;
  image: string;
}
export interface Entidade {
  entidade : string;
  entidade_id : string;
  estado : string;
  municipio : string;
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
  entidade : Entidade;
  setClient: (newClient: Partial<Client>) => void;
  setEntidade: (newEntidade: Partial<Entidade>) => void;
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
    entidade: '',
    cod_ibge: ''
  },
  entidade: {
   entidade: '',
   entidade_id:'',
   estado: '',
   municipio: '',
  },
  setClient: (newClient) =>
    set((state) => ({
      ...state,
      client: {
        ...state.client,
        ...newClient
      }
    })),
    setEntidade: (newEntidade) =>
    set((state) => ({
      ...state,
      entidade: {
        ...state.entidade,
        ...newEntidade
      }
    })),
}));
