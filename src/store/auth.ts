import { TOKEN_WEB } from '@/constraint/web';
import { api } from '@/services/api';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { error as msgError } from 'message-next';

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
  logout : () => void;
  onLogin: (login : string, senha: string) => Promise<void>;
}

const isAuthenticated = () => localStorage.getItem(TOKEN_WEB) !== null;

export const useAuth = create(persist<AuthState>(
  set => ({
    isAuthenticated: isAuthenticated(),
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
      onLogin : async (login : string, senha : string) => {
         try {
          const token = await api.post("/login", {
            login,
            senha
          })
          if (token.data) {
            set({ isAuthenticated: true, user: token.data.user });
            localStorage.setItem(TOKEN_WEB, token.data.access_token);
          }
         }catch(error : any) {
          msgError(error.response.data.non_field_errors[0]);
         }
      },
    logout: () => {
        localStorage.removeItem(TOKEN_WEB);
        localStorage.removeItem("zustand-auth");
        set({ isAuthenticated: false });
      },
  }),
  {
    name: 'zustand-auth',
    getStorage: () => localStorage
  }
))
