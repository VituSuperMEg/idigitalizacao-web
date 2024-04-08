"use client";
import Buttons from '@/components/Crud/Buttons';
import Select from '@/components/Form/Select';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Plain } from 'solar-icons-react';
import { z } from 'zod';


type Entidades = {
  estados: string;
  cidades: string
  entidades: string
}
const EntidadesSchema = z.object({
});


export function Entidades() {

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Entidades>({
    resolver: zodResolver(EntidadesSchema)
  });

  const [estados, setEstados] = useState([
    { label: 'Ceára', value: 'ceara' }
  ]);
  const [cidades, setCidades] = useState([
    { label: 'Cedro', value: 'Cedro' }
  ]);
  const [entidades, setEntidades] = useState([
    { label: 'Prefeitura', value: 'prefeitura' }
  ])

  async function onSubmit(values: Entidades) {
    console.log(values)
  }
  return (
    <div className=" bg-white centralizer p-24 rounded-lg  flex items-center">
      <form className='flex flex-col w-full text-center' onSubmit={handleSubmit(onSubmit)}>
        <header className='flex items-center gap-2 mb-9 justify-center'>
          <Plain size={20} color='#858585' />
          <h2>W2E - Digitalização</h2>
        </header>
        <Select
          id='estados'
          defaultOption='Selecione um estado'
          label='Estados'
          options={estados}
          required
          {...register('estados')}
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
        <Button variant="outline" className='mt-5 h-12' type='submit'>Entrar</Button>
      </form>

    </div>
  )
}
