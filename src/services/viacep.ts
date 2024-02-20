import axios from "axios";


const viacep = axios.create({
  baseURL : "https://viacep.com.br/ws"
})

export const getCep = async (cep : string) => {
  const response = await viacep.get(`/${cep}/json/`)
  return response.data;
}
