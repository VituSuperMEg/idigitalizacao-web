import { useState } from "react";
import Buttons from "./Buttons";
import { ArrowRight, ChevronRight } from "lucide-react";
import Table from "./Table";
import './crud.css';

interface ICrud {
  display : {
    displayName: string;
    displayMenu: string;
  }
  fieldsTable : [
    { head : string, body : string}
  ]
}
export default function Crud({
  display,
  fieldsTable 
}:ICrud) {

  const [view, setView] = useState("list");

  return (
    <div>
      <header className="flex items-center justify-between">
         <div className="flex items-center">
            <h2>{display?.displayName}</h2>
            <ChevronRight />
            <h2>{display?.displayMenu}</h2>
         </div>
        <Buttons setView={setView} view={view}/>
      </header> 
      {view === 'list' && (
        <Table fields={fieldsTable}/>
      )}
      {view === "new" && (
        <h1>novo</h1>
      )}
    </div>
  )
}