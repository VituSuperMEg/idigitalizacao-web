"use client";
import { useClientData } from '@/context/useClient';
import { If } from "if-component-ts";
import Entidades from "./Entidades";



export default function Login() {
  const { client, codIbge} = useClientData();

  console.log(client)

  return (
    <>
      <If test={client}>
        <div className='centralizer'>
          <h2>Login</h2>
           <p>{client}</p>
           <p>{codIbge}</p>
        </div>
      </If>
      <If test={!client}>
        <Entidades />
      </If>
    </>

  )
}
