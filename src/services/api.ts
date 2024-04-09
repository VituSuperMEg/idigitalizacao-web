import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { error } from 'message-next';

interface ResponseData {
  success: boolean;
  error: string;
  // Outras propriedades conforme necessário
}

interface HTTP {
  endPoint: string;
  values?: any;
  id?: number;
}

export const api = axios.create({
  baseURL: "http://127.0.0.1:8080/api"
})

export const submit = async ({ endPoint, values }: HTTP) => {
  try {
    const response: AxiosResponse<ResponseData> = await api.post(`${endPoint}`, values);
    if (response.status === 200 && response.data.success) {
      return toast.success(response.data.success);
    } else {
      error((response.data as ResponseData).error, "Erro");
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        error((axiosError.response.data as ResponseData).error, "Erro");
      } else {
        error("Erro desconhecido", "Erro");
      }
    } else {
      error("Erro desconhecido", "Erro");
    }
  }
}

export const del = async ({ endPoint, id }: HTTP) => {
  try {
    const response: AxiosResponse<ResponseData> = await api.delete(`${endPoint}/${id}`);
    if (response.status === 200 && response.data.success) {
      return toast.success(response.data.success);
    } else {
      error((response.data as ResponseData).error, "Erro");
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        error((axiosError.response.data as ResponseData).error, "Erro");
      } else {
        error("Erro desconhecido", "Erro");
      }
    } else {
      error("Erro desconhecido", "Erro");
    }
  }
}
