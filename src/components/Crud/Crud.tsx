import { ReactNode, useState } from "react";
import { ArrowRight, ChevronRight, Home, HomeIcon } from "lucide-react";
import { If } from 'if-component-ts';
import Table from "./Table";
import Buttons from "./Buttons";

import './crud.css';
import { useCrud } from "@/store/crud";
import Pagination from "./Pag";
import Form from "./Form";

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
  Type : any;
  Schema : any;
  onSubmit : (values : any) => void;
}
export default function Crud({
  display,
  fieldsTable,
  form,
  endPoint,
  onSubmit,
  Schema,
  Type
}: ICrud) {
  const view = useCrud(state => state.view);
  return (
    <div>
      <header className="flex items-center justify-between" style={{ marginTop: -70 }}>
        <div className="flex items-center">
          <Home className="cursor-pointer mr-3" size={20} />
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
          <Pagination  />
        </div>
      </If>
      <If test={view === "new"}>
        {/* <Form form={form} onSubmit={onSubmit}  Schema={Schema} Type={Type}/> */}
        {form}
      </If>
      <If test={view === "edit"}>
       {form}
      </If>
    </div>
  )
}
