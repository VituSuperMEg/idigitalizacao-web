// Form.tsx
import { ReactNode, useEffect } from "react";
import { FieldValues, RegisterOptions, UseFormRegisterReturn, UseFormSetValue, useForm } from "react-hook-form";
import { error } from 'message-next';
import { api, submit } from "@/services/api";
import { useCrud } from "@/store/crud";
import { ButtonsCrud, IButton } from "../Form/ButtonsCrud";
import { zodResolver } from "@hookform/resolvers/zod";

interface IForm {
  form: (errors: any, register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn, setValue: UseFormSetValue<FieldValues>, control: any) => ReactNode;
  Type: any;
  Schema: any;
  endPoint: string;
  buttons : IButton
}

export default function Form({
  form,
  Type,
  Schema,
  endPoint,
  buttons
}: IForm) {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors }
  } = useForm<typeof Type>({
    resolver: zodResolver(Schema)
  });

  const id = useCrud(state => state.id);
  const view = useCrud(state => state.view);

  async function fillFormFields() {
    try {
      const response = await api.get(`/${endPoint}/${id}`);
      const data = response.data.data[0];
      const keys: (keyof typeof Type)[] = ["descricao"];

      keys.forEach((key: keyof typeof Type) => {
        setValue(key as string, data[key]);
      });
    } catch (error) {
      console.error("Erro ao preencher os campos do formulário:", error);
    }
  }

  async function onSubmit(values: any) {
    if (view === "new") {
      await submit({
        endPoint: `/${endPoint}`, values
      });
    } else {
      await submit({
        endPoint: `/${endPoint}/update`,
        values: {
          id: id,
          ...values
        }
      });
    }
  }

  useEffect(() => {
    if (view === "edit") {
      fillFormFields();
    }
  }, [view]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5 flex-col mt-2">
      {form(errors, register, setValue, control)}
      <ButtonsCrud
      btnNew={buttons.btnNew}
      btnDel={buttons.btnDel}
      />
    </form>
  )
}
