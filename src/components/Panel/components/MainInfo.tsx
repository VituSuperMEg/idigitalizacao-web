import Avatar from "@/components/Avatar/avatar";
import Separator from "@/components/Separator/separator";
import ToolTip from "@/components/Tooltip/Tooltip";
import { useAuth } from "@/store/auth";
import { Dot, LogOut, MessageSquare, Settings, User } from "lucide-react";
import { useState } from "react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function MainInfo() {

  const user = useAuth(state => state.user);
  return (
    <div className="avatar">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <div className="flex items-center gap-2 mt-5 cursor-pointer">
            <Avatar name={user.nome} image={user.image} />
            <span className="text-zinc-600">{user.nome}</span>
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="bg-white mr-4 p-3 flex flex-col gap-2 mt-4 h-36 rounded-md w-56 shadow-lg">
          <DropdownMenu.Item className="flex items-center gap-5 border-0 outline-none cursor-pointer hover:bg-slate-50">
            <User className="text-zinc-500" /> Meu perfil
          </DropdownMenu.Item>
          <DropdownMenu.Item  className="flex items-center gap-5 border-0 outline-none cursor-pointer hover:bg-slate-50">
            <Settings className="text-zinc-500" /> Configurações
          </DropdownMenu.Item>
          <DropdownMenu.Item  className="flex items-center gap-5 border-0 outline-none cursor-pointer hover:bg-slate-50">
            <MessageSquare className="text-zinc-500" /> Notificações
          </DropdownMenu.Item>
          <DropdownMenu.Item  className="flex items-center gap-5 border-0 outline-none text-red-500 cursor-pointer hover:bg-slate-50">
            <LogOut className="text-red-500" /> Sair
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}
