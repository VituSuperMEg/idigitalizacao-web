import Crud from "@/components/Crud/Crud";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonsCrud } from "@/components/Form/ButtonsCrud";
import { api, submit } from "@/services/api";
import { useEffect, useState } from "react";
import { useCrud } from "@/store/crud";

type SalasType = {
  descricao: string;
}

const SalasSchema = z.object({
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

export default function Salas() {

  const initialOrgao: SalasType = {
    descricao: "",
  };

  return (
    <Crud
      display={{ displayName: "Salas", displayMenu: "Cadastro" }}
      endPoint="salas"
      fieldsTable={[
        { head: "Código", body: "id" },
        { head: "Descrição", body: "descricao" },
      ]}
      Type={initialOrgao}
      form={renderForm}
      buttons={{
        btnDel: true,
        btnNew: true,
      }}
    />
  )
}
