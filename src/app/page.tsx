
import Login from "@/pages/Login/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
      <main>
        <Login />
        <ToastContainer />
      </main>
  );
}
