import { ReactNode, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { If } from 'if-component-ts';
import Table from "./Table";
import Buttons from "./Buttons";

import './crud.css';

interface ICrud {
  display: {
    displayName: string;
    displayMenu: string;
  }
  fieldsTable: [
    { head: string, body: string }
  ];
  form: ReactNode;
  endPoint: string;
  setIdForm: number;
  type: any;
  Schema : any;
}
export default function Crud({
  display,
  fieldsTable,
  form,
  endPoint,
  setIdForm,
  type,
  Schema
}: ICrud) {

  const [view, setView] = useState("list");
  const [id, setId] = useState(0);
  const [editData, setEditData] = useState<any>(null);

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
      <If test={view === "list"}>
        <div className="w-full">
          <Table 
            fields={fieldsTable} 
            setView={setView} 
            endPoint={endPoint}
            setId={setId} 
          />
        </div>
      </If>
      <If test={view === "new"}>
        {form}
      </If>
      <If test={view === "edit"}>
       {form}
      </If>
    </div>
  )
}