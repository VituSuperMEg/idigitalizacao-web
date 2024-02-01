import Crud from "@/components/Crud/Crud";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

import * as F from '@radix-ui/react-form';
import { ButtonsCrud } from "@/components/Form/ButtonsCrud";
import Input from "@/components/Form/Input";


type Orgao = {
  descricao: string;
  responsavel: string;
  cpf: string;
  num_expediente: string;
  cod_setor: string;
}

const OrgaoSchema = z.object({
  descricao: z.string().nonempty("a descrição é obrigatória").min(3, { message: "A descrição deve ter pelo menos 3 caracteres." }),
  responsavel: z.string().nonempty("o responsável é obrigatório").min(1, { message: "O responsável deve ter pelo 1 caracteres" }),
  cpf: z.string().nonempty("o responsável é obrigatório").min(1, { message: "O responsável deve ter pelo 1 caracteres" }),
});

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
        <Input
          id="descricao"
          label="Descrição"
          required={true}
          autoFocus={true}
          {...register("descricao")}
          error={errors.descricao?.message}
        />
        <Input
          id="responsavel"
          label="Responsável"
          error={errors.responsavel?.message}
          {...register("responsavel")}
        />
      </div>
      <div className="flex gap-3">
        <Input
          id="cpf"
          label="CPF"
          {...register("cpf")}
          error={errors.responsavel?.message}
        />
        <Input
          id="num_expediente"
          label="Num_expediente"
          {...register("num_expediente")}
          error={errors.responsavel?.message}
        />
        <Input
          id="cpf"
          label="CPF"
          {...register("cpf")}
          error={errors.responsavel?.message}
        />
      </div>
      <ButtonsCrud />
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