"use client";

import { useEffect, useState } from "react";
import { SidebarMenu } from "./components/SidebarMenu";

import OrgaoPage from "@/pages/Orgao";
import PillMenu from "./components/PillMenu";
import SetorPage from "@/pages/Setor";
import TiposDocumentosPage from "@/pages/TiposDocumentos";
import SalasPage from "@/pages/Salas";
import CaixasPage from '@/pages/Caixas';
import EstantesPage from "@/pages/Estantes";
import CredoresPage from "@/pages/Credores";



import './panel.css';
import MainInfo from "./components/MainInfo";
import { useAuth } from "@/store/auth";
import { TOKEN_WEB } from "@/constraint/web";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const pages: any = {
  Orgão: <OrgaoPage />,
  Setor: <SetorPage />,
  TiposDocumentos: <TiposDocumentosPage />,
  Salas: <SalasPage />,
  Caixas: <CaixasPage />,
  Estantes: <EstantesPage />,
  Credores: <CredoresPage />
};

export function Panel() {
  const [page, setPage] = useState("");
  const [pagesMenu, setPagesMenu] = useState<string[]>([]);

  const handleCapturePageChange = (selectedPage: string) => {
    setPage(selectedPage);
    if (!pagesMenu.includes(selectedPage)) {
      if (pagesMenu.length > 6) {
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

  const client = useAuth(state => state.client);
  const router = useRouter();
  const isAuthenticated = useAuth(state => state.isAuthenticated);

  useEffect(() => {
    console.log(isAuthenticated)
    if(isAuthenticated === false) {
      router.push(`/login/${client.cod_ibge}`);
      toast.error("Sua sessão expirou. Por favor, faça login novamente.", {
        onClose: () => {
          // console.log("Usuário foi redirecionado para a página de login.");
        }
      });
    }
  }, [isAuthenticated, router, client.cod_ibge]);

  return (
    <div className="h-screen flex">
      <SidebarMenu onCapturePageChange={handleCapturePageChange} />
      <div className="w-screen flex items-center justify-center bg-slate-100 mt-12">
        <div className={`w-full m-4 ${page && "bg-white"} rounded-xl p-10`} style={{
          height: '95.4%'
        }}>
          <MainInfo />
          <PillMenu selectedPage={page} pages={pagesMenu} setPage={setPage} onRemovePage={removePageMenu} />
          <div className="mt-16">
            {pages[page]}
          </div>
        </div>
      </div>
    </div>
  );
}
