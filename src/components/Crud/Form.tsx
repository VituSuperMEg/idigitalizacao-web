import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react"
import { useForm } from "react-hook-form";

interface IForm {
  form : ReactNode;
  Type : any;
  Schema : any;
  onSubmit : (values : any) => void;
}

export default function Form ({
  form,
  Type,
  Schema,
  onSubmit
}:IForm) {
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors }
  } = useForm<typeof Type>({
    resolver: zodResolver(Schema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5 flex-col mt-2">
      {form}
    </form>
  )
}
