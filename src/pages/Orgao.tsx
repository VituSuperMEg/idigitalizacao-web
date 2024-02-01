import Crud from "@/components/Crud/Crud";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Save } from "lucide-react";

import * as F from '@radix-ui/react-form';


type Orgao = {
  descricao: string;
  responsavel : string;
}
const OrgaoSchema = z.object({
  descricao: z.string().nonempty("a descrição é obrigatória").min(3, { message: "A descrição deve ter pelo menos 3 caracteres." }),
  responsavel : z.string().nonempty("o responsável é obrigatório").min(1, { message: "O responsável deve ter pelo 1 caracteres" }),
})

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Orgao>({
    resolver: zodResolver(OrgaoSchema)
  });

  function onSubmit(values: any) {
    console.log(values)
  }
  return (
    <F.Root onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-7">
        <F.Field name="descricao" className="w-3/6 mt-5">
          <div>
            <F.Label>Descrição <span className="text-red-500">*</span></F.Label>
          </div>
          <F.Control asChild>
            <input className="border rounded-md p-3 w-full" type="text" {...register("descricao")} />
          </F.Control>
          <F.Message className="block">
            <span className="text-red-500">{errors.descricao && <span>{errors.descricao.message}</span>}</span>
          </F.Message>
        </F.Field>
        <F.Field name="responsavel" className="w-2/6 mt-5">
          <div>
            <F.Label>Responsável <span className="text-red-500">*</span></F.Label>
          </div>
          <F.Control asChild>
            <input className="border rounded-md p-3 w-full" type="text" {...register("responsavel")} />
          </F.Control>
          <F.Message className="block">
            <span className="text-red-500">{errors.responsavel && <span>{errors.responsavel.message}</span>}</span>
          </F.Message>
        </F.Field>
      </div>
      <div className="flex justify-end mt-4">
        <F.Submit asChild >
          <button className="bg-emerald-400 p-3 rounded-md text-white w-44">
            <strong className="flex gap-5"><Save />  Salvar</strong>
          </button>
        </F.Submit>
      </div>
    </F.Root>
  )
}
export default function OrgaoPage() {
  return (
    <div>
      <Crud
        display={{ displayName: "Orgão", displayMenu: "Cadastro" }}
        fieldsTable={[
          { head: "Código", body: "codigo" },
          { head: "Nome", body: "nome" },
          { head: "Responsável", body: "responsavel" },
          { head: "CPF", body: "cpf" }
        ]}
        form={<Form />}
      />
    </div>
  )
}