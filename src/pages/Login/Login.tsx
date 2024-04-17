"use client";
import { If } from "if-component-ts";
import Entidades from "./Entidades";
import { useAuth } from "@/store/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";



export default function Login() {
  const client = useAuth(state => state.client);

  const router = useRouter();

  useEffect(() => {
    if (client.cod_ibge && client.cod_ibge !== '') {
      router.push(`/login/${client?.cod_ibge}`);
    }
  }, [client.cod_ibge, router]);


  return (
    <>
      <Entidades />
    </>
  )
}
