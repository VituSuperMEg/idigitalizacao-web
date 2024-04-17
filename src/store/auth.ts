import { create } from 'zustand';
import { persist } from 'zustand/middleware';


export interface User {
  acl_grupo_id: string;
  atendente: number;
  ativo: string;
  atualizado_em: string;
  atualizado_por: number;
  celular: string;
  cod_sms_recuperacao_senha: string;
  criado_em: string;
  criado_por:  number;
  email:string;
  id: number;
  json_token_google_calendar:  string;
  login: string;
  nome: string;
  numero_cpf:string;
  image: string;
}
export interface Entidade {
  entidade: string;
  entidade_id: string;
  estado: string;
  municipio: string;
}

export interface Client {
  estado: string;
  municipio: string;
  entidade: string;
  cod_ibge: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User;
  client: Client;
  entidade: Entidade;
  setClient: (newClient: Partial<Client>) => void;
  setEntidade: (newEntidade: Partial<Entidade>) => void;
  setUser: (newUser: Partial<User>) => void;
}

export const useAuth = create(persist<AuthState>(
  set => ({
    isAuthenticated: false,
    user: {} as User,
    client: {} as Client,
    entidade: {} as Entidade,
    setUser: (newUser) =>
      set((state) => ({
        ...state,
        user: {
          ...state.user,
          ...newUser
        }
      })),
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
  }),
  {
    name: 'zustand-auth',
    getStorage: () => localStorage
  }
))
