import { ReactNode } from "react";

type RowType = {
  direction?: 'column' | 'row',
  gap?: number;
  children: ReactNode;
}
export function Row({
  direction = 'row',
  gap = 2,
  children
}: RowType) {
  return (
    <div className={`flex ${direction === "column" ? 'flex-col' : 'flex-row'} gap-${gap}`}>
      {children}
    </div>
  )
}
