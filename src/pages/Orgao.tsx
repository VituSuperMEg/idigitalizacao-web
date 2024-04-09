import Crud from "@/components/Crud/Crud";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonsCrud } from "@/components/Form/ButtonsCrud";
import { api, submit } from "@/services/api";
import { useEffect, useState } from "react";
import { useCrud } from "@/store/crud";
import { Input } from "@/components/Form/Input";




const OrgaoSchema = z.object({
  descricao: z.string().nonempty("a descrição é obrigatória").min(3, { message: "A descrição deve ter pelo menos 3 caracteres." }),
  responsavel: z.string().nonempty("o responsável é obrigatório").min(1, { message: "O responsável deve ter pelo 1 caracteres" }),
  cpf: z.string().nonempty("o cpf é obrigatório").min(1, { message: "O responsável deve ter pelo 1 caracteres" }).max(11, { message: "o maximo é 11 cararecteres" }),
  num_expediente : z.number()
});


function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors }
  } = useForm<Orgao>({
    resolver: zodResolver(OrgaoSchema)
  });

  const id = useCrud(state => state.id);
  const view = useCrud(state => state.view);

  async function fillFormFields() {
    try {
      const response = await api.get(`/orgaos/${id}`);
      const data = response.data.data[0];
      const keys: (keyof Orgao)[] = ['descricao'];
  
      keys.forEach((key: keyof Orgao) => {
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
    if (view === "new") {
      await submit({
        endPoint: "/orgaos", values: {
          descricao: values.descricao,
          responsavel: values.responsavel,
          cpf: values.cpf,
          num_expediente: values.num_expediente
        }
      });
    } else {
      await submit({
        endPoint: "/orgaos/update", values: {
          id: id,
          descricao: values.descricao,
        }
      });
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5 flex-col mt-2">
      <Input
        label="Descrição"
        required
        control={control}
        {...register("descricao")}
        errors={errors.descricao && <p className="text-red-500">{errors.descricao.message}</p>}
      />
      <div className="flex justify-between gap-3">
        <Input
          className="w-full"
          label="Responsável"
          required
          control={control}
          {...register("responsavel")}
          errors={errors.responsavel && <p className="text-red-500">{errors.responsavel.message}</p>}
        />
        <Input
          label="CPF"
          required
          control={control}
          {...register("cpf")}
          errors={errors.cpf && <p className="text-red-500">{errors.cpf.message}</p>}
        />
      </div>
     
      <ButtonsCrud btnNew />
    </form>
  )
}
type Orgao = {
  descricao: string;
  responsavel: string;
  cpf: string;
  num_expediente: string;
  cod_setor: string;
}

export default function OrgaoPage() {
  return (
    <div>
      <Crud
        Schema={OrgaoSchema}
        display={{ displayName: "Orgão", displayMenu: "Cadastro" }}
        endPoint="orgaos"
        fieldsTable={[
          { head: "Código", body: "id" },
          { head: "Nome", body: "descricao" },
          { head: "Responsável", body: "responsavel" },
          { head: "CPF", body: "cpf" }
        ]}
        form={<Form />}
      />
    </div>
  )
}
