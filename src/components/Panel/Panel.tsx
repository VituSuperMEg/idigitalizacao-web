"use client";

import { ReactNode, useState } from "react";
import { SidebarMenu } from "./components/SidebarMenu";
import OrgaoPage from "@/pages/Orgao";
import FuncionariosPage from "@/pages/Funcionario";
import PillMenu from "./components/PillMenu";
import './panel.css';

const pages: any = {
  Orgão: <OrgaoPage />,
  funcionario: <FuncionariosPage />,
  // relatorios: <RelatoriosPage />,
};

export function Panel() {
  const [page, setPage] = useState("");
  const [pagesMenu, setPagesMenu] = useState<string[]>([]);

  const handleCapturePageChange = (selectedPage: string) => {
    setPage(selectedPage);
    if (!pagesMenu.includes(selectedPage)) {
      if(pagesMenu.length > 6) {
        alert("ta bom homi!")
        return false;
      }
      setPagesMenu(prevState => [...prevState, selectedPage]);
    }
  };

  const removePageMenu = (pageToRemove: string) => {
    const updatedPages = pagesMenu.filter(page => page !== pageToRemove);
    const newPage = updatedPages[updatedPages.length - 1];
    setPagesMenu(updatedPages);
    setPage(newPage);
  };

  return (
    <div className="h-screen flex">
      <SidebarMenu onCapturePageChange={handleCapturePageChange} />
      <div className="w-screen h-screen flex items-center justify-center bg-slate-100">
        <div className="w-full h-5/6 m-10 bg-white rounded-xl p-10">
          <PillMenu selectedPage={page} pages={pagesMenu} setPage={setPage} onRemovePage={removePageMenu}/>
          {pages[page]}
        </div>   
      </div>
    </div>
  );
}
