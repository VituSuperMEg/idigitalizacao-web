"use client";
import * as Accordion from '@radix-ui/react-accordion';
import { PlusIcon as Plus } from 'lucide-react';
import { File as Rel } from 'lucide-react';
import { Archive as Document } from 'lucide-react';
import { Settings as Set } from 'lucide-react';
import MainInfo from './MainInfo';
import { MailBox } from 'solar-icons-react';

interface ISidebarMenu {
  onCapturePageChange: (page: string) => void;
}
export function SidebarMenu({
  onCapturePageChange
}: ISidebarMenu) {
  return (
    <ul className="bg-white w-44 flex flex-col p-2 justify-between m-4 rounded-lg">
      <div>
       <p className='flex gap-4 items-center'><MailBox size={20}/> {""} Idigitalizacao</p>
        <Accordion.Root type="multiple" className='mt-16'>
          {/* Cadastro */}
          <Accordion.Item className="w-ful" value="item-1">
            <Accordion.Trigger className='w-full flex gap-2  items-center hover:bg-stone-200 rounded-lg p-2'><Plus size={20} /> Cadastro</Accordion.Trigger>
            <Accordion.Content>
              <div className='flex flex-col ml-2'>
                <p className='hover:bg-stone-200 rounded-lg p-2 cursor-pointer' onClick={() => onCapturePageChange("Orgão")}>Orgão</p>
                <p className='hover:bg-stone-200 rounded-lg p-2 cursor-pointer' onClick={() => onCapturePageChange("Setor")}>Setor</p>
                <p className='hover:bg-stone-200 rounded-lg p-2 cursor-pointer' onClick={() => onCapturePageChange("TiposDocumentos")}>Tipos de Documentos</p>
                <p className='hover:bg-stone-200 rounded-lg p-2 cursor-pointer' onClick={() => onCapturePageChange("Salas")}>Salas</p>
                <p className='hover:bg-stone-200 rounded-lg p-2 cursor-pointer' onClick={() => onCapturePageChange("Caixas")}>Caixas</p>
                <p className='hover:bg-stone-200 rounded-lg p-2 cursor-pointer' onClick={() => onCapturePageChange("Estantes")}>Estantes</p>
                <p className='hover:bg-stone-200 rounded-lg p-2 cursor-pointer' onClick={() => onCapturePageChange("Credores")}>Credores</p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
          {/*  Documentos */}
          <Accordion.Item className="w-ful" value="item-2">
            <Accordion.Trigger className='w-full flex items-center gap-2 hover:bg-stone-200 rounded-lg p-2'><Document size={20} /> Documentos</Accordion.Trigger>
          </Accordion.Item>


          {/* Relatórios */}
          <Accordion.Item className="w-ful" value="item-3">
            <Accordion.Trigger className='w-full flex items-center gap-2 hover:bg-stone-200 rounded-lg p-2'><Rel size={20} /> Relatórios</Accordion.Trigger>
            <Accordion.Content>
              <div className='flex flex-col ml-2'>
                <p className='hover:bg-stone-200 rounded-lg p-2 cursor-pointer' onClick={() => onCapturePageChange("gerencial")}>Relátorio Gerencial</p>
                <p className='hover:bg-stone-200 rounded-lg p-2 cursor-pointer' onClick={() => onCapturePageChange("etiquetas")}>Imprimir Etiquetas</p>
              </div>
            </Accordion.Content>
          </Accordion.Item>

          {/* Utilitários */}
          <Accordion.Item className="w-ful" value="item-4">
            <Accordion.Trigger className='w-full flex items-center gap-2 hover:bg-stone-200 rounded-lg p-2'><Set size={20} /> Utilitários</Accordion.Trigger>
            <Accordion.Content>
              <div className='flex flex-col ml-2'>
                <p className='hover:bg-stone-200 rounded-lg p-2 cursor-pointer' onClick={() => onCapturePageChange("config")}>Configurações</p>
                <p className='hover:bg-stone-200 rounded-lg p-2 cursor-pointer' onClick={() => onCapturePageChange("exportar")}>Exportar</p>
                <p className='hover:bg-stone-200 rounded-lg p-2 cursor-pointer' onClick={() => onCapturePageChange("producao")}>Produção</p>
                <p className='hover:bg-stone-200 rounded-lg p-2 cursor-pointer' onClick={() => onCapturePageChange("importar-docs")}>Importar Documentos</p>
                <p className='hover:bg-stone-200 rounded-lg p-2 cursor-pointer' onClick={() => onCapturePageChange("importar-sim")}>Importar Arquivos SIM</p>
                <p className='hover:bg-stone-200 rounded-lg p-2 cursor-pointer' onClick={() => onCapturePageChange("importar-tce")}>Importar TCE RN</p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </div>

    </ul>
  )
}
