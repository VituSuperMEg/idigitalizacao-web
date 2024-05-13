import Crud from "@/components/Crud/Crud";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonsCrud } from "@/components/Form/ButtonsCrud";
import { api, submit } from "@/services/api";
import { useEffect, useState } from "react";
import { useCrud } from "@/store/crud";
import { format } from "path";
import { AsyncFilter } from "@/components/Form/AsyncFilter";
import { Input } from "@/components/Form/Input";
import Select from "@/components/Form/Select";
import { Row } from "@/components/_laytous/Row";
import { Scroll } from "@/components/_laytous/Scroll";

type ConfigType = {

}

const ConfiguracaoSchema = z.object({
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


export default function Config() {

  const initial: ConfigType = {
    descricao: "",
  };

  const {
    control
  } = useForm()

  return (
    <div style={{ marginTop: -20 }}>
        <form>
          <fieldset className="border-2 border-zinc-100 p-5 rounded-md">
            <legend>Geral</legend>
            <Row>
              <div>
                <AsyncFilter
                  path="municipios"
                  label="Município"
                  className="w-72"
                />
              </div>
              <Input
                control={control}
                className="w-full"
                name="gestor_responsavel"
                label="Gestor Responsável"
              />
            </Row>
            <Row>
              <Input
                control={control}
                className="w-full"
                name="gestor_responsavel2"
                label="Gestor Responsável"
              />
              <Input
                control={control}
                className="w-60"
                name="cnpj"
                label="Cnpj"
              />
            </Row>
            <Row>
              <Input
                control={control}
                className="w-full"
                name="endereco"
                label="Endereço"
              />
              <Input
                control={control}
                className="w-full"
                name="complemento"
                label="Complemento"
              />
              <Select
                label="Entidade"
                defaultOption="Entidade"
                options={[
                  { label: "P - Prefeitura", value: "P" },
                  { label: "C - Camara", value: "C" }
                ]}
              />
            </Row>
            <Row>
              <Input
                control={control}
                className="w-full"
                name="bairro"
                label="Bairro"
              />
              <Input
                control={control}
                className="w-full"
                name="cep"
                label="Cep"
              />
              <Input
                control={control}
                className="w-full"
                name="tel_one"
                label="Tel 1"
              />
              <Input
                control={control}
                className="w-full"
                name="tel_two"
                label="Tel 2"
              />
              <Input
                control={control}
                className="w-full"
                name="tel_two"
                label="Tel 2"
              />
              <Input
                control={control}
                className="w-full"
                name="exerc"
                label="Exerc"
              />
              <Input
                control={control}
                className="w-full"
                name="cod_mun"
                label="Cod Mun"
              />
            </Row>
          </fieldset>
          <fieldset className="border-2 border-zinc-100 p-5 rounded-md mt-5">
            <legend>Dados Portal</legend>
            <Row>
              <Input
                control={control}
                className="w-full"
                name="url_portal"
                label="Url Portal"
              />
              <Input
                control={control}
                className="w-3/6"
                name="usuario"
                label="Usuário"
              />
              <Input
                control={control}
                className="w-96"
                name="senha"
                label="Senha"
              />
              <Input
                control={control}
                className="w-96"
                name="porta"
                label="Porta"
              />
            </Row>
          </fieldset>
          <fieldset className="border-2 border-zinc-100 p-5 rounded-md mt-5">
            <legend>Dados Portal</legend>
            <Row>
              <Input
                control={control}
                className="w-full"
                name="url_portal"
                label="Url Portal"
              />
              <Input
                control={control}
                className="w-3/6"
                name="usuario"
                label="Usuário"
              />
              <Input
                control={control}
                className="w-96"
                name="senha"
                label="Senha"
              />
              <Input
                control={control}
                className="w-96"
                name="porta"
                label="Porta"
              />
            </Row>
          </fieldset>
          <fieldset className="border-2 border-zinc-100 p-5 rounded-md mt-5">
            <legend>Dados Portal</legend>
            <Row>
              <Input
                control={control}
                className="w-full"
                name="url_portal"
                label="Url Portal"
              />
              <Input
                control={control}
                className="w-3/6"
                name="usuario"
                label="Usuário"
              />
              <Input
                control={control}
                className="w-96"
                name="senha"
                label="Senha"
              />
              <Input
                control={control}
                className="w-96"
                name="porta"
                label="Porta"
              />
            </Row>
          </fieldset>
        </form>

    </div>

  )
}
