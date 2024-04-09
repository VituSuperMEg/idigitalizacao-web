"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Plain } from 'solar-icons-react';
import { z } from 'zod';
import Select from '@/components/Form/Select';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';

type Entidades = {
  estados: string;
  cidades: string;
  entidades: string;
}

const EntidadesSchema = z.object({
  estados: z.string().nonempty('Por favor, selecione um estado'),
  cidades: z.string().nonempty('Por favor, selecione uma cidade'),
  entidades: z.string().nonempty('Por favor, selecione uma entidade'),
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

  const [estados] = useState([
    { label: 'Ceára', value: 'ceara' }
  ]);

  const [cidades] = useState([
    { label: 'Cedro', value: 'Cedro' }
  ]);

  const [entidades] = useState([
    { label: 'Prefeitura', value: 'prefeitura' }
  ]);

  const onSubmit = (data: Entidades) => {
    console.log(data);
  };

  return (
    <div className="bg-white centralizer p-24 rounded-lg flex items-center">
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
        {errors.estados && <p className="text-red-500">{errors.estados.message}</p>}
        <Select
          id='cidades'
          defaultOption='Selecione uma cidade'
          label='Cidades'
          options={cidades}
          required
          {...register('cidades')}
        />
        {errors.cidades && <p className="text-red-500">{errors.cidades.message}</p>}
        <Select
          id='entidades'
          defaultOption='Selecione uma entidade'
          label='Entidades'
          options={entidades}
          required
          {...register('entidades')}
        />
        {errors.entidades && <p className="text-red-500">{errors.entidades.message}</p>}
        <Button variant="outline" className='mt-5 h-12' type='submit'>Entrar</Button>
      </form>
    </div>
  )
}
