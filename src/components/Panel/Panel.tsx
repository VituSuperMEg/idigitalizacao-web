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
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import DocumentosPages from "@/pages/documentos/Documentos";

const pages: any = {
  Orgão: <OrgaoPage />,
  Setor: <SetorPage />,
  TiposDocumentos: <TiposDocumentosPage />,
  Salas: <SalasPage />,
  Caixas: <CaixasPage />,
  Estantes: <EstantesPage />,
  Credores: <CredoresPage />,
  Documentos : <DocumentosPages />
};

export function Panel() {
  const [page, setPage] = useState("");
  const [pagesMenu, setPagesMenu] = useState<string[]>([]);

  const handleCapturePageChange = (selectedPage: string) => {
    if (pagesMenu.length >= 6) {
      return false;
    }
    setPagesMenu(prevState => [...prevState, selectedPage]);
    setPage(selectedPage);
  };

  const removePageMenu = (pageToRemove: string) => {
    const updatedPages = pagesMenu.filter(page => page !== pageToRemove);
    setPagesMenu(updatedPages);
    const lastPage = updatedPages.length > 0 ? updatedPages[updatedPages.length - 1] : "";
    setPage(lastPage);
  };

  const client = useAuth(state => state.client);
  const router = useRouter();
  const isAuthenticated = useAuth(state => state.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated === false) {
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
            {pages[page] || ""}
          </div>
        </div>
      </div>
    </div>
  );
}

