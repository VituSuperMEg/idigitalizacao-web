// Form.tsx
import { ReactNode, useEffect } from "react";
import { FieldValues, RegisterOptions, UseFormRegisterReturn, UseFormSetValue, useForm } from "react-hook-form";
import { error } from 'message-next';
import { api } from "@/services/api";
import { useCrud } from "@/store/crud";
import { ButtonsCrud } from "../Form/ButtonsCrud";
import { zodResolver } from "@hookform/resolvers/zod";

interface IForm {
  form: (errors: any, register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn, setValue: UseFormSetValue<FieldValues>, control: any) => ReactNode;
  Type: any;
  Schema: any;
  onSubmit: (values: any) => void;
  endPoint: string;
}

export default function Form({
  form,
  Type,
  Schema,
  onSubmit,
  endPoint
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

  useEffect(() => {
    if (view === "edit") {
      fillFormFields();
    }
  }, [view]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5 flex-col mt-2">
      {form(errors, register, setValue, control)}
      <ButtonsCrud btnNew={false} />
    </form>
  )
}
