import Crud from "@/components/Crud/Crud";
import { z } from "zod";
import { Input } from "@/components/Form/Input";


type OrgaoType = {
  descricao: string;
  responsavel: string;
  cpf: string;
  num_expediente: string;
  cod_setor: string;
}


const OrgaoSchema = z.object({
  descricao: z.string().nonempty("a descrição é obrigatória").min(3, { message: "A descrição deve ter pelo menos 3 caracteres." }),
  responsavel: z.string().nonempty("o responsável é obrigatório").min(1, { message: "O responsável deve ter pelo 1 caracteres" }),
  cpf: z.string().nonempty("o cpf é obrigatório").min(1, { message: "O responsável deve ter pelo 1 caracteres" }).max(11, { message: "o maximo é 11 cararecteres" }),
  num_expediente : z.number()
});


const renderForm = (errors: any, register: any, setValue: any, control: any) => {
  return (
    <>
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
    </>
  );
};

export default function OrgaoPage() {
  const initialOrgao: OrgaoType = {
    descricao: "",
    responsavel: "",
    cpf: "",
    num_expediente: "",
    cod_setor: ""
  };

  return (
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
        form={renderForm}
        Type={initialOrgao}
        buttons={{
          btnDel : true,
          btnNew : true,
        }}
      />
  )
}
