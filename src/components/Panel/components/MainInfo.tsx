import Avatar from "@/components/Avatar/avatar";
import Separator from "@/components/Separator/separator";
import ToolTip from "@/components/Tooltip/Tooltip";
import { useAuth } from "@/store/auth";
import { Dot, LogOut, Settings, User } from "lucide-react";
import { useState } from "react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function MainInfo() {

  const [expanded, setExpanded] = useState(false);
  const user = useAuth(state => state.user);

  return (
    <div className="avatar">
      <DropdownMenu.Root >
        <DropdownMenu.Trigger asChild>
          <div className="flex items-center gap-2 mt-5 cursor-pointer">
            <Avatar name={user.name} image={user.image} />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="bg-white mr-6 mt-4 w-44 h-36 rounded-md">
          <DropdownMenu.Item  className="flex items-center gap-5 border-0">
            <User /> Meu perfil
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
