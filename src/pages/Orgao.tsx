import Crud from "@/components/Crud/Crud";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonsCrud } from "@/components/Form/ButtonsCrud";
import { api, submit } from "@/services/api";
import { useEffect, useState } from "react";
import { useCrud } from "@/store/crud";


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
  num_expediente: z.string().nonempty().max(15)
});

function Form() {
  const {
    register,
    handleSubmit,
    setValue,
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
      console.log(data)
      Object.keys(data).forEach((key : keyof Orgao) => {
        setValue(key, data[key]);
      });
    } catch (error) {
      console.error("Erro ao preencher os campos do formulário:", error);
    }
  }
  
  useEffect(() => {
    fillFormFields();
  }, []);

  async function onSubmit(values: any) {
    await submit({
      endPoint: "/orgaos", values: {
        descricao: values.descricao,
        responsavel: values.responsavel,
        cpf: values.cpf,
        num_expediente: values.num_expediente
      }
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5 flex-col mt-2">
      <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("descricao")} placeholder="Descrição" />
      <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("responsavel")} placeholder="Responsável" />
      <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("cpf")} placeholder="CPF" />
      <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("num_expediente")} placeholder="Num_expediente" />
      <ButtonsCrud btnNew={false} />
    </form>
  )
}
export default function OrgaoPage() {
  
  const [id, setId] = useState(0);
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