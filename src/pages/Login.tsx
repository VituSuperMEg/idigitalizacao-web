import { Input } from "@/components/Form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Auth = {
  login: string;
  password: string;
}

const AuthSchema = z.object({
  login: z.string().nonempty("a login é obrigatória"),
  password: z.string().nonempty("senha obrigatória"),
});

export default function Login() {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<Auth>({
    resolver: zodResolver(AuthSchema)
  });

  async function onSubmit() {

  }
  return (
    <div className="bg-slate-100 h-screen flex items-center justify-center">
      <div className="w-2/6 h-4/6 bg-white rounded p-10">
        <header>
          <h2 className="text-3xl">Login<span className="text-yellow-300">.</span></h2>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  gap-10 h-full justify-center items-center">
          <Input
            control={control}
            className="w-full"
            label="Usuário"
            name="login"
            errors={errors && <p className="text-red-500">{errors.login?.message}</p>}
            {...register("login")}
          />
          <div  className="w-full">
          <Input
            control={control}
            label="Senha"
            className="w-full"
            type="password"
            name="password"
            errors={errors && <p className="text-red-500">{errors.password?.message}</p>}
            {...register("password")}
          />
          <div className="text-right w-full">
            <a href="" className="text-zinc-500">esqueci minha senha</a>
          </div>
          </div>
          <button className="bg-yellow-200 w-full h-14 rounded hover:bg-yellow-300">
            <strong>Login</strong>
          </button>
          <a href="#" className="text-zinc-500">Problemas com acesso ? <span className="text-yellow-500">clique aqui.</span></a>
        </form>

      </div>
    </div>
  )
}
