import Crud from "@/components/Crud/Crud";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonsCrud } from "@/components/Form/ButtonsCrud";
import { api, submit } from "@/services/api";
import { useEffect, useState } from "react";
import { useCrud } from "@/store/crud";

type Estantes = {
  descricao: string;
}

const EstantesSchema = z.object({
  descricao: z.string().nonempty("a descrição é obrigatória").min(3, { message: "A descrição deve ter pelo menos 3 caracteres." }),
});

function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Estantes>({
    resolver: zodResolver(EstantesSchema)
  });

  const id = useCrud(state => state.id);
  const view = useCrud(state => state.view);

  async function fillFormFields() {
    try {
      const response = await api.get(`/estantes/${id}`);
      const data = response.data.data[0];
      const keys: (keyof Estantes)[] = ['descricao'];
     
      keys.forEach((key: keyof Estantes) => {
        setValue(key, data[key]);
      });
    } catch (error) {
      console.error("Erro ao preencher os campos do formulário:", error);
    }
  }

  useEffect(() => {
    if (view === "edit") {
    
      fillFormFields();
    }
  }, [view]);

  async function onSubmit(values: any) {
    if(view === "new") {
      await submit({
        endPoint: "/estantes", values: {
          descricao: values.descricao,
        }
      });
    }else{
      await submit({
        endPoint: "/estantes/update", values: {
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

export default function Estantes() {
  return (
    <Crud
      display={{ displayName: "Estantes", displayMenu: "Cadastro" }}
      endPoint="estantes"
      fieldsTable={[
        { head: "Código", body: "id" },
        { head: "Descrição", body: "descricao" },
      ]}
      form={<Form />}
    />
  )
}