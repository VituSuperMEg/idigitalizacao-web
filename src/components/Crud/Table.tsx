import { orgaos } from "@/mocks/mocks";
import { Pencil, Trash } from "lucide-react";

interface ITable {
  fields: [
    { head: string; body: string }
  ];
  setView : string;
}

export default function Table({ fields, setView }: ITable) {

  return (
    <div>
      <table className="w-full mt-6 table">
        <thead>
          {fields.map((i) => (
            <th className="text-zinc-500 head">{i.head}</th>
          ))}
          <th className="text-zinc-500 float-right mr-8">Ações</th>
        </thead>
        <tbody>
          {orgaos &&
            orgaos.map((item: any, index) => (
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
                        // handleRemove(item.id);
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
