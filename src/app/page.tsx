import { Panel } from "@/components/Panel/Panel";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main>
      <Panel />
      <ToastContainer />
    </main>
  );
}
