import Avatar from "@/components/Avatar/avatar";
import Separator from "@/components/Separator/separator";
import ToolTip from "@/components/Tooltip/Tooltip";
import { useAuth } from "@/store/auth";
import { Dot, LogOut } from "lucide-react";

export default function MainInfo() {

  const user = useAuth(state => state.user);

  return (
    <div className="flex ">
      <div className="flex items-center gap-2 mt-5">
        <Avatar name={user.name} image={user.image} />
        {/* <p className="text-nowrap" style={{
          fontSize: 12
        }}>
          {user.name}
        </p> */}
      </div>
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
