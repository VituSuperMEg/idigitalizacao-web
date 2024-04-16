"use client";
import { Input } from "@/components/Form/Input";
import { Button } from "@/components/ui/button";
import { OBJECTCLIENT } from "@/interfaces/interfaces";
import { api, getDataParams } from "@/services/api";
import { useAuth } from "@/store/auth";
import { useRouter, useParams } from "next/navigation";
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

  async function onSubmit(values : Login) {
    console.log(values)
  }
  return (
    <form className="centralizer bg-white h-4/6 w-2/6 rounded-lg p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex h-full flex-col justify-center items-center p-12">
        <header className='flex items-center gap-2 mb-9 justify-center'>
          <MailBox size={25} />
          <h2>W2E - Digitalização</h2>
        </header>
        <Input
          control={control}
          label="Usuário"
          name="usuario"
          className="w-full"
          required
          errors={errors.usuario && <p className="text-red-500">{errors.usuario.message}</p>}
        />
        <div className="w-full flex flex-col items-end"
        >
          <Input
            control={control}
            label="Senha"
            name="senha"
            type="password"
            className="w-full mt-4"
            required
            errors={errors.senha && <p className="text-red-500">{errors.senha.message}</p>}
          />
          <p className="cursor-pointer text-zinc-400">esqueci minha senha</p>
        </div>
        <Button className="w-full mt-5 h-12" variant="default"  type="submit">
          Entrar
        </Button>
      </div>
    </form>
  );
};

export default CodigoIBGEPage;
