"use client";

import { Panel } from "@/components/Panel/Panel";
import Login from "@/pages/Login";
import { useAuth } from "@/store/auth";
import { If } from "if-component-ts";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const isAuthenticated = useAuth(state => state.isAuthenticated);

  return (
    <main>
      <If test={isAuthenticated}>
       <Panel />
      </If>
      <If test={!isAuthenticated}>
       <Login />
      </If>
      <ToastContainer />
    </main>
  );
}
