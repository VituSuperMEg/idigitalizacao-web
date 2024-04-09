import { ReactNode } from "react";

export interface CHILDREN {
  children: ReactNode;
  element?: ReactNode;
}
export interface OPTIONS {
  label?: string[];
  value?: string[];
}
