"use client";
import { CHILDREN, OPTIONS } from "@/interfaces/interfaces";
import { api } from "@/services/api";
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";


interface IClient{
  estados: [
    { label : "", value : ""}
  ];
  municipios: [
    { label : "", value : ""}
  ];
  entidades : [
    { label : "", value : ""}
  ];
  client: string;
  setEstadoId: (event : any) => void;
  setMunicipioId: (event : any) => void;
  setEntidadeId: (event : any) => void;
}
const ClientContext = createContext({} as IClient);

export const ClientProvider = ({ children } : CHILDREN) => {

  const [estado_id, setEstadoId] = useState("");
  const [municipio_id, setMunicipioId] = useState("");
  const [entidade_id, setEntidadeId] = useState("");

   const [estados, setEstados] = useState<OPTIONS[]>([]);
   const [municipios, setMunicipios] = useState<OPTIONS[]>([]);;
   const [entidades, setEntidades] = useState<OPTIONS[]>([]);;
   const [client, setClient] = useState("");

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
        setMunicipioId
      }}
     >
      {children}
     </ClientContext.Provider>
   )
}

export function useClientData () {
  const context = useContext(ClientContext);

  if(!context) {
    throw new Error("useClient must be used")
  }

  return context;
}
