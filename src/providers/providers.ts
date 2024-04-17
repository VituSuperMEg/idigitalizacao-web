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
export async function getDB(entidade_id: string) {
  if(entidade_id !== "") {
    const res = await api.get(`entidades/${entidade_id}`);
    return res.data.data;
  }
}
