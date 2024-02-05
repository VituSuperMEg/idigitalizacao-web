import { api, del } from "@/services/api";
import { Pencil, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { confirmationDeleteReturn } from 'message-next';

interface ITable {
  fields: [
    { head: string; body: string }
  ];
  setView : string;
  endPoint: string;
}

export default function Table({ fields, setView, endPoint }: ITable) {
 
  const [data, setData] = useState<any[]>([]);

  async function getList() {
    const list = await api.get(`${endPoint}`);
    setData(list.data.data);
  }

  async function remove(id: number) {
    const check = await confirmationDeleteReturn("Deseja realmente excluir este registro!");
    if(check) {
      await del({ endPoint: endPoint, id : id});
      getList();
    }
  } 

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <table className="w-full mt-6 table">
        <thead>
          {fields.map((i) => (
            <th className="text-zinc-500 head"  key={i.head}>{i.head}</th>
          ))}
          <th className="text-zinc-500 float-right mr-8">Ações</th>
        </thead>
        <tbody>
          {data &&
            data.map((item: any, index) => (
              <tr key={index}>
                {fields.map((i) => (
                  <td key={i.body}>
                    {item[i.body]}
                  </td>
                ))}
                <div className="flex float-right gap-2">
                  <td
                    className="bg-slate-400 mt-2 mb-2"
                    style={{
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                       justifyContent: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <Pencil
                      color="#fff"
                      className="cursor-pointer"
                      onClick={() => {
                        setView("edit");
                        // onEditId(item.id);
                      }}
                    />
                  </td>
                  <td
                    className="bg-red-500 mt-2"
                    style={{
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <Trash
                      color="#fff"
                      className="cursor-pointer"
                      onClick={() => {
                        remove(item.id)
                      }}
                    />
                  </td>
                </div>
              </tr>
            ))}
        </tbody>
      </table>
    </div>

  );
}
