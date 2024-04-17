
import { Panel } from "@/components/Panel/Panel";
import Login from "@/pages/Login/Login";
import { If } from "if-component-ts";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main>
      <Login />
    </main>
  );
}
