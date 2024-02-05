import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { error } from 'message-next';

interface HTTP {
  endPoint: string;
  values?: any;
  id? : number;
}
export const api = axios.create({
  baseURL: "http://127.0.0.1:1001/api"
})

export const submit = async ({ endPoint, values }: HTTP) => {
  try {
    const response = await api.post(`${endPoint}`, values);
    if (response.status === 200) {
      return toast.success(response.data.success);
    }
  } catch (err) {
    const axiosError = err as AxiosError;
    error(axiosError.response.data.error, "ERROR");
  }
}
export const del = async ({endPoint, id}:HTTP) => {
  try {
    const response = await api.delete(`${endPoint}/${id}`);
    if (response.status === 200) {
      return toast.success(response.data.success);
    }
  }catch(err) {
    const axiosError = err as AxiosError;
    error(axiosError.response.data.error, "ERROR");
  }
}