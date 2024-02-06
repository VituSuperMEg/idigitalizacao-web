import { api } from "@/services/api";
import { ReactNode, useEffect } from "react";
import { useForm } from "react-hook-form"

interface IForm {
  endPoint: string;
  formComponent: ReactNode;
  id : number;
}

export default function Form({ endPoint, formComponent, id }: IForm) {
  const { handleSubmit, setValue } = useForm();

  async function onSubmit() {
    // Lógica de envio do formulário
  }

  async function fillFormFields() {
    try {
      const response = await api.get(`${endPoint}/${id}`);
      const data = response.data; 
      Object.keys(data).forEach((key) => {
        setValue(key, data[key]);
      });
    } catch (error) {
      console.error("Erro ao preencher os campos do formulário:", error);
    }
  }
  
  useEffect(() => {
    fillFormFields();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formComponent}
    </form>
  );
}
