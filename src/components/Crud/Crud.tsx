import { ReactNode } from "react";
import { ArrowRight, ChevronRight, Home, HomeIcon } from "lucide-react";
import { If } from 'if-component-ts';
import Table from "./Table";
import Buttons from "./Buttons";

import './crud.css';
import { useCrud } from "@/store/crud";
import Pagination from "./Pag";
import Form from "./Form";
import { BreadcrumbComponent } from "./BreadCrumb";
import { FieldValues, RegisterOptions, UseFormRegisterReturn, UseFormSetValue } from "react-hook-form";

interface ICrud {
  display: {
    displayName: string;
    displayMenu: string;
  }
  fieldsTable: { head: string, body: string }[];
  form: (errors: any, register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn, setValue: UseFormSetValue<FieldValues>, control: any) => ReactNode;
  endPoint: string;
  Type?: any;
  Schema?: any;
  onSubmit: (values: any) => void;
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
          <BreadcrumbComponent
            display={display}
          />
        </div>
        <Buttons />
      </header>
      <If test={view === "list"}>
        <div className="w-full">
          <Table
            fields={fieldsTable}
            endPoint={endPoint}
          />
          <Pagination />
        </div>
      </If>
      <If test={view === "new" || view === "edit"}>
        {typeof form === 'function' && (
          <Form
            form={(errors, register, setValue, control) => form(errors, register, setValue, control)}
            onSubmit={onSubmit}
            Schema={Schema}
            Type={Type}
            endPoint={endPoint}
          />
        )}
      </If>
    </div>
  )
}
