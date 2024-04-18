"use client";

import { Panel as Painel } from '@/components/Panel/Panel';
import { useAuth } from '@/store/auth';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Importando 'toast' também
import { useRouter  } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { TOKEN_WEB } from '@/constraint/web';

export default function Panel() {


  return (
    <>
      <Painel />
      <ToastContainer />
    </>
  );
}
