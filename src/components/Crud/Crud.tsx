import { ReactNode, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { If } from 'if-component-ts';
import Table from "./Table";
import Buttons from "./Buttons";

import './crud.css';
import { useCrud } from "@/store/crud";

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
}
export default function Crud({
  display,
  fieldsTable,
  form,
  endPoint,
}: ICrud) { 

  const view = useCrud(state => state.view);
  return (
    <div>
      <header className="flex items-center justify-between" style={{ marginTop: -70 }}>
        <div className="flex items-center">
          <h2>{display?.displayName}</h2>
          <ChevronRight />
          <h2>{display?.displayMenu}</h2>
        </div>
        <Buttons />
      </header>
      <If test={view === "list"}>
        <div className="w-full">
          <Table 
            fields={fieldsTable} 
            endPoint={endPoint}
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