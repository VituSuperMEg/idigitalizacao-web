import Crud from "@/components/Crud/Crud";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonsCrud } from "@/components/Form/ButtonsCrud";
import { api, submit } from "@/services/api";
import { useEffect, useState } from "react";
import { useCrud } from "@/store/crud";

type Setor = {
  descricao: string;
}

const SetorSchema = z.object({
  descricao: z.string().nonempty("a descrição é obrigatória").min(3, { message: "A descrição deve ter pelo menos 3 caracteres." }),
});

// function Form() {
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors }
//   } = useForm<Setor>({
//     resolver: zodResolver(SetorSchema)
//   });

//   const id = useCrud(state => state.id);
//   const view = useCrud(state => state.view);

//   async function fillFormFields() {
//     try {
//       const response = await api.get(`/setor/${id}`);
//       const data = response.data.data[0];
//       const keys: (keyof Setor)[] = ['descricao'];

//       keys.forEach((key: keyof Setor) => {
//         setValue(key, data[key]);
//       });
//     } catch (error) {
//       console.error("Erro ao preencher os campos do formulário:", error);
//     }
//   }

//   useEffect(() => {
//     if (view === "edit") {

//       fillFormFields();
//     }
//   }, [view]);

//   async function onSubmit(values: any) {
//     if(view === "new") {
//       await submit({
//         endPoint: "/setor", values: {
//           descricao: values.descricao,
//           responsavel: values.responsavel,
//           cpf: values.cpf,
//           num_expediente: values.num_expediente
//         }
//       });
//     }else{
//       await submit({
//         endPoint: "/setor/update", values: {
//           id : id,
//           descricao: values.descricao,
//         }
//       });
//     }
//   }
//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5 flex-col mt-2">


//     </form>
//   )
// }

const renderForm = (errors: any, register: any, setValue: any, control: any) => {
  return (
    <>
      <label>
        Descrição
        <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("descricao")} />
        {errors.descricao && <p className="text-red-500">{errors.descricao.message}</p>}
      </label>
    </>
  );
};


export default function Setor() {
  return (
    <Crud
      display={{ displayName: "Setor", displayMenu: "Cadastro" }}
      endPoint="setor"
      fieldsTable={[
        { head: "Código", body: "id" },
        { head: "Descrição", body: "descricao" },
      ]}
      onSubmit={() => {}}
      Schema={SetorSchema}
      Type={Setor}
      form={renderForm}
    />
  )
}
