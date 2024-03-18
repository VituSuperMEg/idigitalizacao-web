import { useAuth } from "@/store/auth";
import { LogOut } from "lucide-react";

export default function MainInfo() {

  const user = useAuth(state => state.user);

  return (
    <div>
      {user.name}
      <LogOut />
    </div>
  )
}
