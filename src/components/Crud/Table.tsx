import { api, del } from "@/services/api";
import { Pencil, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { confirmationDeleteReturn } from 'message-next';
import ToolTip from "../Tooltip/Tooltip";
import { useCrud } from "@/store/crud";

interface ITable {
  fields: [{ head: string; body: string }];
  endPoint: string;
}
export default function Table({ fields, endPoint }: ITable) {

  const [data, setData] = useState<any[]>([]);

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
  }

  async function remove(id: number) {
    const check = await confirmationDeleteReturn("Deseja realmente excluir este registro!");
    if (check) {
      await del({ endPoint: endPoint, id: id });
      getList();
    }
  }

  useEffect(() => {
    getList();
  }, [currentPage]);

  function handleId(id : number) {
    setId(id)
  }
  return (
    <div>
      <table className="w-full mt-2 table">
        <thead>
          {fields?.map((i) => (
            <th className="text-zinc-500" key={i.head}>{i.head}</th>
          ))}
          <th className="text-zinc-500 float-right mr-8">Ações</th>
        </thead>
        <tbody>
          {data &&
            data.map((item: any, index) => (
              <tr key={index}>
                {fields?.map((i) => (
                  <td key={i.body}>
                    {item[i.body]}
                  </td>
                ))}
                <div className="flex float-right gap-2 items-center">
                  <ToolTip
                    element={
                      <td
                        className="bg-slate-400 m-1"
                        style={{
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                        }}
                      >
                        <Pencil
                          color="#fff"
                          className="cursor-pointer"
                          size={20}
                          onClick={() => {
                            setView("edit");
                            handleId(item.id);
                          }}
                        />
                      </td>
                    }
                    description="Editar"
                  />
                  <ToolTip
                    element={
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
                      <Trash
                        color="#fff"
                        className="cursor-pointer"
                        size={20}
                        onClick={() => {
                          remove(item.id)
                        }}
                      />
                    </td>}
                    description="Excluir"
                  />
                </div>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
