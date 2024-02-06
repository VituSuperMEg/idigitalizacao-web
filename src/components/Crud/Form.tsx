import { api } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode, useEffect } from "react";
import { useForm } from "react-hook-form"

interface IForm {
  endPoint: string;
  formComponent: ReactNode;
  id : number;
  type : any;
  Schema : any;
  onSubmit : () => void;
}

export default function Form({ 
  id,
  endPoint, 
  formComponent,
  type,
  Schema,
  onSubmit
}: IForm) {

  const { handleSubmit, setValue } = useForm<typeof type>({
    resolver : zodResolver(Schema)
  });

  async function handleOnSubmit() {
    onSubmit();
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
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      {formComponent}
    </form>
  );
}
