import { useCrud } from "@/store/crud";
import { ArrowLeft, CreativeCommons, Plus, Search } from "lucide-react";
import { Button } from "../ui/button";

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
        <Button
         className="flex gap-2 h-12 p-3 rounded-lg text-white"
         onClick={() => setView('new')}
        ><Plus /> Novo </Button>
      )}
      {(view === "new" || view === "edit") && (
         <Button
         className="flex gap-2 h-12 p-3 rounded-lg text-white"
         onClick={() => setView('list')}
        ><Search /> Buscar </Button>
      )}
    </div>
  )
}
