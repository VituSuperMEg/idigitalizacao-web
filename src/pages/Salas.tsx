import Crud from "@/components/Crud/Crud";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonsCrud } from "@/components/Form/ButtonsCrud";
import { api, submit } from "@/services/api";
import { useEffect, useState } from "react";
import { useCrud } from "@/store/crud";

type Salas = {
  descricao: string;
}

const SalasSchema = z.object({
  descricao: z.string().nonempty("a descrição é obrigatória").min(3, { message: "A descrição deve ter pelo menos 3 caracteres." }),
});

function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Salas>({
    resolver: zodResolver(SalasSchema)
  });

  const id = useCrud(state => state.id);
  const view = useCrud(state => state.view);

  useEffect(() => {
    if (view === "edit") {
      async function fillFormFields() {
        try {
          const response = await api.get(`/salas/${id}`);
          const data = response.data.data[0];
          Object.keys(data).forEach((key: keyof Salas) => {
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
        endPoint: "/salas", values: {
          descricao: values.descricao,
        }
      });
    }else{
      await submit({
        endPoint: "/salas/update", values: {
          id : id,
          descricao: values.descricao,
        }
      });
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5 flex-col mt-2">
      <label>
        Descrição
        <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("descricao")} />
        {errors.descricao && <p className="text-red-500">{errors.descricao.message}</p>}
      </label> 
      <ButtonsCrud btnNew={false} />
    </form>
  )
}

export default function Salas() {
  return (
    <Crud
      display={{ displayName: "Salas", displayMenu: "Cadastro" }}
      endPoint="salas"
      fieldsTable={[
        { head: "Código", body: "id" },
        { head: "Descrição", body: "descricao" },
      ]}
      form={<Form />}
    />
  )
}