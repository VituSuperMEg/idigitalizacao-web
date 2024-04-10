"use client";
import { Button } from '@/components/ui/button';
import { api } from '@/services/api';
import { useEffect, useState } from 'react';
import { Plain } from 'solar-icons-react';
import Select from '@/components/Form/Select';
import { useClientData } from '@/context/useClient';



export default function Entidades() {

  const {
    setEntidadeId,
    setMunicipioId,
    setEstadoId,
    estados,
    municipios,
    entidades ,
    loggerClient
  }
   = useClientData();

  return (
    <div className="centralizer bg-white p-20 rounded-lg">
      <form className='flex flex-col w-ful gap-7'>
        <header className='flex items-center gap-2 mb-9 justify-center'>
          <Plain size={20} color='#858585' />
          <h2>W2E - Digitalização</h2>
        </header>
        <Select
          id='estados'
          className='w-96'
          defaultOption='Selecione um estado'
          label='Estados'
          options={estados}
          required
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setEstadoId(event.target.value);
          }}
        />
        <Select
          defaultOption='Selecione uma Cidade'
          label='Cidades'
          className='w-96'
          options={municipios}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setMunicipioId(event.target.value)
          }}
          required
        />
        <Select
          id='entidades'
          defaultOption='Selecione uma entidade'
          label='Entidades'
          options={entidades}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setEntidadeId(event.target.value)
          }}
          required
        />
        <Button variant="default" className='h-12' type='submit' onClick={() => loggerClient()}>Entrar</Button>
      </form>
    </div>
  )
}
