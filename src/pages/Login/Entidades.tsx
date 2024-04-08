"use client";
import Buttons from '@/components/Crud/Buttons';
import Select from '@/components/Form/Select';
import { useState } from 'react';
import { Plain } from 'solar-icons-react';

export function Entidades() {

  const [estados, setEstados] = useState([
    { label: 'Ceára', value: 'ceara' }
  ]);
  const [cidades, setCidades] = useState([
    { label: 'Cedro', value: 'Cedro' }
  ]);
  const [entidades, setEntidades] = useState([
    { label: 'Prefeitura', value: 'prefeitura' }
  ])
  return (
    <div className="h-96 bg-white centralizer p-24 rounded-lg w-3/6 flex items-center">
      <form className='flex flex-col w-full text-center'>
        <header className='flex items-center gap-2 mb-9 justify-center'>
          <Plain size={20} color='#858585' />
          <h2>W2E - Digitalização</h2>
        </header>
        <Select
          defaultOption='Selecione um estado'
          label='Estados'
          options={estados}
          required
        />
        <Select
          defaultOption='Selecione um estado'
          label='Cidades'
          options={cidades}
          required
        />
        <Select
          defaultOption='Selecione um estado'
          required
          label='Entidades'
          options={entidades}
        />
        <button></button>
      </form>

    </div>
  )
}
