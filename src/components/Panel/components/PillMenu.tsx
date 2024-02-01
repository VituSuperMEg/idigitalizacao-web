import { Trash, X } from "lucide-react";
import { useEffect, useState } from "react";

interface IPillMenu {
  pages?: string[];
  selectedPage: string;
  setPage: any;
  onRemovePage: (page: string) => void;
}
export default function PillMenu({
  pages,
  selectedPage,
  setPage,
  onRemovePage
}: IPillMenu) {
  
  return (
    <div className="pill">
      <div className="bg-white shadow-lg p-3 rounded-md">
        <span>Dashboard</span>
      </div>
      {pages?.map(item => (
        <div className={`${selectedPage === item ? 'bg-slate-500' : 'bg-white'} shadow-lg p-3 rounded-md cursor-pointer ${selectedPage === item ? 'text-white' : 'text-black'} ${selectedPage !== item ? 'hover:bg-slate-300' : 'hover:bg-slate-500'}`} onClick={() => setPage(item)}>
          <div className="flex gap-2">
            <span>{item}</span>
            <X size={15}className="hover:text-red-400" onClick={() => onRemovePage(item)}/>
          </div>
        </div>
      ))}
    </div>
  )
}