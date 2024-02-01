import { ArrowLeft, CreativeCommons, Plus } from "lucide-react";

type Button = {
  view: string;
  setView: any;
}
export default function Buttons({ view = 'list', setView }: Button) {
  return (
    <div>
      {view === 'list' && (
        <button 
         className="bg-slate-400 flex gap-2 p-3 rounded-lg text-white"
         onClick={() => setView('new')}
        ><Plus /> Novo </button>
      )}
      {view === "new" && (
         <button 
         className="bg-slate-400 flex gap-2 p-3 rounded-lg text-white"
         onClick={() => setView('list')}
        ><ArrowLeft /> Voltar </button>
      )}
    </div>
  )
}