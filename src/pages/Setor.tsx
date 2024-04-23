import Crud from "@/components/Crud/Crud";
import { z } from "zod";

type Setor = {
  descricao: string;
}

const SetorSchema = z.object({
  descricao: z.string().nonempty("a descrição é obrigatória").min(3, { message: "A descrição deve ter pelo menos 3 caracteres." }),
});

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
      Schema={SetorSchema}
      Type={Setor}
      form={renderForm}
      buttons={{
        btnNew: true,
        btnDel: true
      }}
    />
  )
}
