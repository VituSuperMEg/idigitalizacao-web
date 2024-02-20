import Crud from "@/components/Crud/Crud";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonsCrud } from "@/components/Form/ButtonsCrud";
import { api, submit } from "@/services/api";
import { useEffect, useState } from "react";
import { useCrud } from "@/store/crud";
import Select from "@/components/Form/Select";
import { bancos, tipodocumneto } from "@/helpers/util";
import InputMask from "react-input-mask";
import { getCep } from "@/services/viacep";

type Credores = {
  id : string;
  nome: string;
  cpf: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cep: string;
  email: string;
  cidade: string;
  telefone: string;
  telefone_complementar: string;
  agencia: string;
  conta: string;
  observacoes: string;
}
const CredoresSchema = z.object({
  // nome : z.string(),
  // cpf: z.string(),
  // logradouro: z.string(),
  // numero: z.string(),
  // bairro: z.string(),
  // cep: z.string(),
  // email: z.string(),
  // cidade: z.string(),
  // telefone: z.string(),
  // telefone_complementar: z.string(),
  // agencia: z.string(),
  // conta: z.string(),
  // observacoes: z.string(),
});

function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Credores>({
    // resolver: zodResolver(CredoresSchema)
  });
  // type Credores = z.infer<typeof CredoresSchema>

  const id = useCrud(state => state.id);
  const view = useCrud(state => state.view);
  const [tipo_documento, setTipo_documento] = useState("");
  const [banco, setBanco] = useState("");
  const [locationAndCep, setLocationAndCep] = useState({});

  useEffect(() => {
    if (view === "edit") {
      async function fillFormFields() {
        try {
          const response = await api.get(`/credores/${id}`);
          const data = response.data.data[0];
          Object.keys(data).forEach((key: keyof Credores) => {
            setValue(key, data[key]);
            setBanco(data.banco);
            setTipo_documento(data.tipo_documento);
          });
        } catch (error) {
          console.error("Erro ao preencher os campos do formulário:", error);
        }
      }
      fillFormFields();
    }
  }, [view]);

  async function onSubmit(values: any) {
    console.log(values)
    if (view === "new") {
      await submit({
        endPoint: "/credores", values: {
          nome: values.nome,
          tipo_documento: tipo_documento,
          cpf: values.cpf,
          logradouro: values.logradouro,
          numero: values.numero,
          bairro: values.bairro,
          cep: values.cep,
          email: values.email,
          cidade: values.cidade,
          telefone: values.telefone,
          telefone_complementar: values.telefone_complementar,
          banco: banco,
          agencia: values.agencia,
          conta: values.conta,
          observacoes: values.observacoes,
        }
      });
    } else {
      await submit({
        endPoint: "/credores/update", values: {
          id: id,
          //  descricao: values.descricao,
        }
      });
    }
  }

  async function handleCep(e: any) {
    const params = await getCep(e.target.value);
    console.log(params);
    setLocationAndCep(params)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5 flex-col mt-2">
      <div className="flex gap-2 items-center">
        <label>
          Id
          <input type="text" className="border rounded-md p-3 w-full outline-none" disabled {...register("id")}/>
        </label>
        <label className="w-full">
          Nome
          <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("nome")} />
          {errors.nome && <p className="text-red-500">{errors.nome.message}</p>}
        </label>
        <Select
          label="Tipo de Documento"
          handleChange={(e: any) => setTipo_documento(e.target.value)}
          defaultOption="Selecione um documento"
          options={tipodocumneto}
          value={tipo_documento}
        />
      </div>
      <div className="flex gap-2 items-center">
        <label>
          CPF
          <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("cpf")} />
          {errors.cpf && <p className="text-red-500">{errors.cpf.message}</p>}
        </label>
        <label className="w-full">
          E-mail
          <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("email")} />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </label>
        <label>
          Telefone
          <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("telefone")} />
          {errors.telefone && <p className="text-red-500">{errors.telefone.message}</p>}
        </label>
        <label>
          Telefone Complementar
          <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("telefone_complementar")} />
          {errors.telefone_complementar && <p className="text-red-500">{errors.telefone_complementar.message}</p>}
        </label>
      </div>
      <div className="flex gap-1">
        <label>
          CEP
          <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("cep")} onChange={handleCep} />
          {errors.cep && <p className="text-red-500">{errors.cep.message}</p>}
        </label>
        <label className="w-full">
          Logradouro
          <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("logradouro")} value={locationAndCep.logradouro}/>
          {errors.logradouro && <p className="text-red-500">{errors.logradouro.message}</p>}
        </label>
        <label>
          Cidade
          <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("cidade")} value={locationAndCep.localidade} />
          {errors.logradouro && <p className="text-red-500">{errors.logradouro.message}</p>}
        </label>
        <label>
          Número
          <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("numero")} />
          {errors.numero && <p className="text-red-500">{errors.numero.message}</p>}
        </label>
        <label>
          Bairro
          <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("bairro")} value={locationAndCep.bairro}/>
          {errors.bairro && <p className="text-red-500">{errors.bairro.message}</p>}
        </label>
      </div>
      <div className="flex gap-2">
        <Select
          label="Banco"
          defaultOption="Selecione um banco"
          options={bancos}
          value={banco}
          handleChange={(e: any) => setBanco(e.target.value)}
        />
        <label className="w-full">
          Agencia
          <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("agencia")} />
          {errors.agencia && <p className="text-red-500">{errors.agencia.message}</p>}
        </label>
        <label>
          Conta
          <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("conta")} />
          {errors.conta && <p className="text-red-500">{errors.conta.message}</p>}
        </label>
      </div>
      <label>
        Observações
        <input type="text" className="border rounded-md p-3 w-full outline-none" {...register("observacoes")} />
        {errors.observacoes && <p className="text-red-500">{errors.observacoes.message}</p>}
      </label>
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
