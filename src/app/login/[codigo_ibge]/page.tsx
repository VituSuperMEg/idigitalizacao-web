"use client";
import { useClientData } from "@/context/useClient";
import { OBJECTCLIENT } from "@/interfaces/interfaces";
import { api, getDataParams } from "@/services/api";
import { useAuth } from "@/store/auth";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";

const CodigoIBGEPage = () => {
  const client = useAuth(state => state.client);
  console.log(client);
  return (
    <form className="centralizer bg-white w-3/6 h-4/6 rounded-lg flex items-center justify-center">
      <h4>{client.entidade}-{client.municipio}{client.estado}</h4>

      <input type="color" name="" id="" />
    </form>
  );
};

export default CodigoIBGEPage;
