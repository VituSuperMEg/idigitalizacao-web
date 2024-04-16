import { api } from "@/services/api";
import { useAuth } from "@/store/auth";

export async function getEstados() {
  const res = await api.get("estados");
  return res.data.data;
}
export async function getCidades(estado_id: string) {
  const res = await api.post("estados/cidades/", {
    estado_id
  });
  return res.data.data;
}
export async function getEntidades(municipio_id: string) {
  const res = await api.post(`estados/cidades/entidades`, {
    municipio_id: municipio_id
  });
  return res.data.data;
}

// async function getEntidade() {
//   const res = await api.get(`estados/cidades/entidades/${entidade_id}`);
//   console.log(res.data.data)
//   // setEntidades(res.data.data)
// }

// async function loggerClient() {
//   setCodIbge(entidades[0]?.value || "");
//   setClient(entidades[0]?.label || "");
// }

// const router = useRouter();

// useEffect(() => {
//   if (codIbge && codIbge !== '') {
//     router.push(`/login/${codIbge}`);
//   }
// }, [codIbge, router]);

// useEffect(() => {
//   if(entidade_id !== '') {
//     getEntidade();
//   }
// }, [entidade_id]);
