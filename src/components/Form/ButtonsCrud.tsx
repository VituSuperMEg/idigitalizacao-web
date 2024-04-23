import { Disc, Plus, Save, Trash, X } from "lucide-react";

export interface IButton {
  btnNew: boolean;
  btnDel: boolean;
}
export function ButtonsCrud({ btnNew, btnDel }: IButton) {
  return (
    <div className="flex justify-end mt-4 gap-3">
      <button type="submit" className="bg-emerald-500 p-3 rounded-md text-white w-32 flex items-center justify-center gap-2">
       <Save />
        <strong>
        Salvar
        </strong>
      </button>
      {btnNew && (
        <button type="button" className="bg-sky-500 p-3 rounded-md text-white w-32 flex items-center justify-center gap-2">
          <Plus />
          <strong>Novo</strong>
        </button>
      )}
      {btnDel && (
        <button type="button" className="bg-red-500 p-3 rounded-md text-white w-32 flex items-center justify-center gap-2">
         <Trash />
         <strong>Excluir</strong>
       </button>
      )}
      <button type="reset" className="bg-red-500 p-3 rounded-md text-white w-32 flex items-center justify-center gap-2">
        <X />
        <strong>
          Cancelar
        </strong>
      </button>
    </div>
  )
}
