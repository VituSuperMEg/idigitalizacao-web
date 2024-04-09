import Crud from "@/components/Crud/Crud";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonsCrud } from "@/components/Form/ButtonsCrud";
import { api, submit } from "@/services/api";
import { useEffect, useState } from "react";
import { useCrud } from "@/store/crud";

type Caixas = {
  descricao: string;
}

const CaixasSchema = z.object({
  descricao: z.string().nonempty("a descrição é obrigatória").min(3, { message: "A descrição deve ter pelo menos 3 caracteres." }),
});

function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Caixas>({
    resolver: zodResolver(CaixasSchema)
  });

  const id = useCrud(state => state.id);
  const view = useCrud(state => state.view);


  async function fillFormFields(id: number, setValue: any, api: any) {
    try {
      const response = await api.get(`/caixas/${id}`);
      const data = response.data.data[0];
  
      // Mapear manualmente as chaves
      const keys: (keyof Caixas)[] = ['descricao'];
  
      keys.forEach((key: keyof Caixas) => {
        setValue(key, data[key]);
      });
    } catch (error) {
      console.error("Erro ao preencher os campos do formulário:", error);
    }
  }

  useEffect(() => {
    if (view === "edit") {
      // Chame a função dentro do useEffect
      fillFormFields(id, setValue, api);
    }
  }, [view, id, setValue, api]);


  async function onSubmit(values: any) {
    if(view === "new") {
      await submit({
        endPoint: "/caixas", values: {
          descricao: values.descricao,
        }
      });
    }else{
      await submit({
        endPoint: "/caixas/update", values: {
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

export default function Caixas() {
  return (
    <Crud
      display={{ displayName: "Caixas", displayMenu: "Cadastro" }}
      endPoint="caixas"
      fieldsTable={[
        { head: "Código", body: "id" },
        { head: "Descrição", body: "descricao" },
      ]}
      form={<Form />}
    />
  )
}