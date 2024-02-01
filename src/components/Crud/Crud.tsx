import { ReactNode, useState } from "react";
import Buttons from "./Buttons";
import { ArrowRight, ChevronRight } from "lucide-react";
import Table from "./Table";
import './crud.css';

interface ICrud {
  display: {
    displayName: string;
    displayMenu: string;
  }
  fieldsTable: [
    { head: string, body: string }
  ];
  form: ReactNode
}
export default function Crud({
  display,
  fieldsTable,
  form
}: ICrud) {

  const [view, setView] = useState("list");

  return (
    <div>

      <header className="flex items-center justify-between" style={{ marginTop: -70 }}>
        <div className="flex items-center">
          <h2>{display?.displayName}</h2>
          <ChevronRight />
          <h2>{display?.displayMenu}</h2>
        </div>
        <Buttons setView={setView} view={view} />
      </header>

      {view === 'list' && (
        <div className="w-full">
          <Table fields={fieldsTable} setView={setView} />
        </div>
      )}
      {view === "new" && (
        form
      )}
      {view === "edit" && (
        <h1>edit</h1>
      )}
    </div>
  )
}