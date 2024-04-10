"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Importe useNavigation em vez de useRouter
import { api } from "@/services/api";

export interface IClient {
  estados: { label: string; value: string }[];
  municipios: { label: string; value: string }[];
  entidades: { label: string; value: string }[];
  client: string;
  setEstadoId: (event: any) => void;
  setMunicipioId: (event: any) => void;
  setEntidadeId: (event: any) => void;
  codIbge: string;
  loggerClient: () => void;
}

const ClientContext = createContext({} as IClient);

export const ClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [estado_id, setEstadoId] = useState("");
  const [municipio_id, setMunicipioId] = useState("");
  const [entidade_id, setEntidadeId] = useState("");
  const [estados, setEstados] = useState<{ label: string; value: string }[]>([]);
  const [municipios, setMunicipios] = useState<{ label: string; value: string }[]>([]);
  const [entidades, setEntidades] = useState<{ label: string; value: string }[]>([]);
  const [client, setClient] = useState("");
  const [codIbge, setCodIbge] = useState("");

  useEffect(() => {
    async function getEstados() {
      const res = await api.get("estados");
      setEstados(res.data.data)
    }
    getEstados();
  }, []);

  useEffect(() => {
    async function getCidades() {
      const res = await api.post(`estados/cidades/`, {
        estado_id: estado_id
      });
      setMunicipios(res.data.data)
    }
    getCidades();
  }, [estado_id]);

  useEffect(() => {
    async function getEntidades() {
      const res = await api.post(`estados/cidades/entidades`, {
        municipio_id: municipio_id
      });
      setEntidades(res.data.data)
    }
    getEntidades();
  }, [municipio_id]);

  async function getEntidade() {
    const res = await api.get(`estados/cidades/entidades/${entidade_id}`);
    console.log(res.data.data)
    // setEntidades(res.data.data)
  }

  async function loggerClient() {
    setCodIbge(entidades[0]?.value || "");
    setClient(entidades[0]?.label || "");
  }

  const router = useRouter();

  useEffect(() => {
    if (codIbge && codIbge !== '') {
      router.push(`/login/${codIbge}`);
    }
  }, [codIbge, router]);

  useEffect(() => {
    if(entidade_id !== '') {
      getEntidade();
    }
  }, [entidade_id]);

  return (
    <ClientContext.Provider
      value={{
        entidades,
        client,
        estados,
        municipios,
        setEntidadeId,
        setEstadoId,
        setMunicipioId,
        loggerClient,
        codIbge
      }}
    >
      {children}
    </ClientContext.Provider>
  )
}

export function useClientData (): IClient {
  const context = useContext(ClientContext);

  if(!context) {
    throw new Error("useClient must be used")
  }

  return context;
}
