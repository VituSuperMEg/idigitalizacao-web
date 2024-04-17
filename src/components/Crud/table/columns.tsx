"use client"

import { ColumnDef } from "@tanstack/react-table"
import { string } from "zod"

export type Field = {
  head : string;
  body : string;
}

export const columns: ColumnDef<Field>[] = [
  {
    accessorKey: "head",
    header: "head",
  },

]
