"use client";

import { Panel as Painel } from '@/components/Panel/Panel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Panel() {
  return (
    <>

     <Painel />
     <ToastContainer />
    </>

  )
}
