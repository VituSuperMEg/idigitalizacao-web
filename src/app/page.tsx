
import { Panel } from "@/components/Panel/Panel";
import { ClientProvider } from "@/context/useClient";
import Login from "@/pages/Login/Login";
import { useAuth } from "@/store/auth";
import { If } from "if-component-ts";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <ClientProvider>
      <main>
        <Login />
        <ToastContainer />
      </main>
    </ClientProvider>
  );
}
