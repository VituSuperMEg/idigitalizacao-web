import Crud from "@/components/Crud/Crud";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonsCrud } from "@/components/Form/ButtonsCrud";
import { api, submit } from "@/services/api";
import { useEffect, useState } from "react";
import { useCrud } from "@/store/crud";

type Credores = {
  nome : string;
  tipo_documento : string;
  cpf : string;
  logradouro : string;
  numero : string;
  bairo : string;
  cep : string;
  email : string;
  cidade : string;
  telefone : string;
  telefone_complementar : string;
  banco : string;
  agencia : string;
  conta : string;
  onservacoes : string;
}

const CredoresSchema = z.object({
  descricao: z.string().nonempty("a descrição é obrigatória").min(3, { message: "A descrição deve ter pelo menos 3 caracteres." }),
});

function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Credores>({
    resolver: zodResolver(CredoresSchema)
  });

  const id = useCrud(state => state.id);
  const view = useCrud(state => state.view);

  useEffect(() => {
    if (view === "edit") {
      async function fillFormFields() {
        try {
          const response = await api.get(`/estantes/${id}`);
          const data = response.data.data[0];
          Object.keys(data).forEach((key: keyof Credores) => {
            setValue(key, data[key]);
          });
        } catch (error) {
          console.error("Erro ao preencher os campos do formulário:", error);
        }
      }
      fillFormFields();
    }
  }, [view]);

  async function onSubmit(values: any) {
    if(view === "new") {
      await submit({
        endPoint: "/credores", values: {
          descricao: values.descricao,
        }
      });
    }else{
      await submit({
        endPoint: "/credores/update", values: {
          id : id,
          descricao: values.descricao,
        }
      });
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5 flex-col mt-2">
      <div className="flex justify-between">
      <label>
        Id
        <input type="text" className="border rounded-md p-3 w-full outline-none" disabled />
        {errors.descricao && <p className="text-red-500">{errors.descricao.message}</p>}
      </label> 
      <label>
        Descrição
        <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("descricao")} />
        {errors.descricao && <p className="text-red-500">{errors.descricao.message}</p>}
      </label> 
      </div>

      <ButtonsCrud btnNew={false} />
    </form>
  )
}

export default function Credores() {
  return (
    <Crud
      display={{ displayName: "Estantes", displayMenu: "Cadastro" }}
      endPoint="credores"
      fieldsTable={[
        { head: "Código", body: "id" },
        { head: "Nome", body: "nome" },
        { head: "CPF", body: "cpf" },
        { head: "E-mail", body: "e-mail" },
        { head: "Telefone", body: "telefone" },

      ]}
      form={<Form />}
    />
  )
}