import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { error } from 'message-next';

interface Submit {
  endPoint: string;
  values: any;
}
export const api = axios.create({
  baseURL: "http://127.0.0.1:1001/api"
})

export const submit = async ({ endPoint, values }: Submit) => {
  try {
    const response = await api.post(`${endPoint}`, values);
    console.log(response.request);

    if (response.status === 200) {
      return toast.success(response.data.success);
    }
  } catch (err) {
    const axiosError = err as AxiosError;
    error(axiosError.response.data.error, "ERROR");
  }
}