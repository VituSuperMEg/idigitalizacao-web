import { api, del } from "@/services/api";
import { Pencil, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { confirmationDeleteReturn } from 'message-next';
import { useCrud } from "@/store/crud";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Skeleton } from "@/components/ui/skeleton"

import {
  Table as T,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { toast } from "react-toastify";
import { If } from "if-component-ts";

interface ITable {
  fields: { head: string; body: string }[];
  endPoint: string;
}
export default function Table({ fields, endPoint }: ITable) {

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // zustand
  const setId = useCrud(state => state.setId);
  const setView = useCrud(state => state.setView);
  const currentPage = useCrud(state => state.curretPage);
  const setCurretPage = useCrud(state => state.setCurretPage);
  const setTotalPages = useCrud(state => state.setTotalPages);
  const setLastPage = useCrud(state => state.setLastPage);

  async function getList() {
    const list = await api.get(`${endPoint}?page=${currentPage}`);
    setCurretPage(list.data.data.current_page);
    setTotalPages(list.data.data.total);
    setLastPage(list.data.data.last_page);
    setData(list.data.data.data);
    setLoading(false)
  }

  async function remove(id: number) {
    const check = await confirmationDeleteReturn("Deseja realmente excluir este registro!");
    if (check) {
      await del({ endPoint: endPoint, id: id });
      getList();
      toast.success("Registro excluído com sucesso!");
    }
  }

  useEffect(() => {
    getList();
  }, [currentPage]);

  function handleId(id: number) {
    setId(id)
  }
  return (
    <>
      <If test={loading}>
        <div className="m-11">
          <Skeleton className="w-full h-[20px] rounded-full" />
          <div className="space-y-2 mt-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </If>
      <If test={!loading}>
        <T className="w-full mt-2 table">
          <thead>
            {fields?.map((i) => (
              <th className="text-zinc-500 text-left" key={i.head}>{i.head}</th>
            ))}
            <th className="text-zinc-500 float-right mr-8">Ações</th>
          </thead>
          <tbody className="p-2">
            {data &&
              data.map((item: any, index) => (
                <tr key={index}>
                  {fields?.map((i) => (
                    <td key={i.body}>
                      {item[i.body]}
                    </td>
                  ))}
                  <div className="flex float-right gap-2 items-center">
                    <td
                      className="bg-primary m-1"
                      style={{
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger> <Pencil
                            color="#fff"
                            className="cursor-pointer"
                            size={20}
                            onClick={() => {
                              setView("edit");
                              handleId(item.id);
                            }}
                          /></TooltipTrigger>
                          <TooltipContent>
                            <p>Editar</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                    <td
                      className="bg-red-500 m-1"
                      style={{
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Trash
                              color="#fff"
                              className="cursor-pointer"
                              size={20}
                              onClick={() => {
                                remove(item.id)
                              }}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Excluir</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                    </td>

                  </div>
                </tr>
              ))}
          </tbody>

        </T>
      </If>
    </>




  );
}
