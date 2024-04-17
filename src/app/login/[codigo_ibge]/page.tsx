"use client";
import { Input } from "@/components/Form/Input";
import { Button } from "@/components/ui/button";
import { getDB } from "@/providers/providers";
import { submit } from "@/services/api";
import { useAuth } from "@/store/auth";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MailBox } from "solar-icons-react";


type Login = {
  usuario: string;
  senha: string;
}

const CodigoIBGEPage = () => {

  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm<Login>();

  const entidade = useAuth(state => state.entidade);
  const client = useAuth(state => state.client);

  async function onSubmit(values : Login) {
    await submit({
      endPoint : "login",
      values : {
        login : values.usuario
      }
    });
  }

  return (
    <div className="centralizer bg-white p-20 rounded-lg">
      <form className='flex flex-col w-full gap-7' onSubmit={handleSubmit(onSubmit)}>
        <header className='flex flex-col text-center items-center gap-2 mb-9 justify-center'>
        <MailBox size={25} />
          {entidade.entidade} <br />
          {entidade.estado} - {entidade.municipio}
        </header>
        <Input
          control={control}
          name="usuario"
          label="Usuário"
          required
          errors={errors && <p>{errors.usuario?.message}</p>}
        />
        <Input
          control={control}
          name="senha"
          label="Senha"
          required
          type="password"
          errors={errors && <p>{errors.usuario?.message}</p>}
        />
        <Button variant="default" className='h-12' type='submit'>Entrar</Button>
      </form>
    </div>
  );
};

export default CodigoIBGEPage;
