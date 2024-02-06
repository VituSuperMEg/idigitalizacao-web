import { useCrud } from "@/store/crud";
import { ArrowLeft, CreativeCommons, Plus } from "lucide-react";

type Button = {
  view: string;
  setView: any;
}
export default function Buttons() {

  const view = useCrud(state => state.view);
  const setView = useCrud(state => state.setView);
  return (
    <div>
      {view === 'list' && (
        <button 
         className="bg-slate-400 flex gap-2 p-3 rounded-lg text-white"
         onClick={() => setView('new')}
        ><Plus /> Novo </button>
      )}
      {(view === "new" || view === "edit") && (
         <button 
         className="bg-slate-400 flex gap-2 p-3 rounded-lg text-white"
         onClick={() => setView('list')}
        ><ArrowLeft /> Voltar </button>
      )}
    </div>
  )
}