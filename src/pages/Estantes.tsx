import Crud from "@/components/Crud/Crud";
import { z } from "zod";

type Estantes = {
  descricao: string;
}

const EstantesSchema = z.object({
  descricao: z.string().nonempty("a descrição é obrigatória").min(3, { message: "A descrição deve ter pelo menos 3 caracteres." }),
});

const renderForm = (errors: any, register: any, setValue: any, control: any) => {
  return (
    <>
      <label>
      <label>
        Descrição
        <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("descricao")} />
        {errors.descricao && <p className="text-red-500">{errors.descricao.message}</p>}
      </label>
      </label>
    </>
  );
};

export default function Estantes() {
  return (
    <Crud
      display={{ displayName: "Estantes", displayMenu: "Cadastro" }}
      endPoint="estantes"
      fieldsTable={[
        { head: "Código", body: "id" },
        { head: "Descrição", body: "descricao" },
      ]}
      Type={Estantes}
      Schema={EstantesSchema}
      form={renderForm}
      buttons={{
        btnNew: true,
        btnDel : true,
      }}
    />
  )
}
