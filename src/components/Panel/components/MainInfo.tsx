import Avatar from "@/components/Avatar/avatar";
import Separator from "@/components/Separator/separator";
import ToolTip from "@/components/Tooltip/Tooltip";
import { useAuth } from "@/store/auth";
import { Dot, LogOut, MessageSquare, Settings, User } from "lucide-react";
import { useState } from "react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function MainInfo() {

  const [expanded, setExpanded] = useState(false);
  const user = useAuth(state => state.user);

  return (
    <div className="avatar">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <div className="flex items-center gap-2 mt-5 cursor-pointer">
            <Avatar name={user.name} image={user.image} />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="bg-white mr-4 p-3 flex flex-col gap-2 mt-4 h-36 rounded-md w-80 shadow-sm">
          <DropdownMenu.Item className="flex items-center gap-5 border-0 outline-none">
            <User className="text-zinc-500" /> Meu perfil
          </DropdownMenu.Item>
          <DropdownMenu.Item  className="flex items-center gap-5 border-0 outline-none">
            <Settings className="text-zinc-500" /> Configurações
          </DropdownMenu.Item>
          <DropdownMenu.Item  className="flex items-center gap-5 border-0 outline-none">
            <MessageSquare className="text-zinc-500" /> Notificações
          </DropdownMenu.Item>
          <DropdownMenu.Item  className="flex items-center gap-5 border-0 outline-none text-red-500">
            <LogOut className="text-red-500" /> Sair
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      {/* <div className="flex justify-end mr-3">
        <ToolTip
          description="Sair"
          element={
            <LogOut className="cursor-pointer hover:text-red-500" />
          }
         />
      </div> */}
    </div>
  )
}
