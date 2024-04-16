"use client";
import { Button } from '@/components/ui/button';
import { api } from '@/services/api';
import { useEffect, useState } from 'react';
import { Compass, MailBox } from 'solar-icons-react';
import Select from '@/components/Form/Select';
import { useAuth } from '@/store/auth';
import { OPTIONS } from '@/interfaces/interfaces';
import { getCidades, getEntidades, getEstados } from '@/providers/providers';

export default function Entidades() {

  const setClient = useAuth(state => state.setClient);
  const client = useAuth(state => state.client);

  const [estados, setEstados] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [entidades, setEntidades] = useState([]);
  const [e, setE] = useState([]);

  useEffect(() => {
    async function obterEstados() {
      const estados = await getEstados();
      setEstados(estados);
    }
    obterEstados();
  }, []);

  useEffect(() => {
    async function obterMunicipios() {
      const mun = await getCidades(client.estado);
      setMunicipios(mun);
    }
    obterMunicipios();
  }, [client.estado]);

  useEffect(() => {
    async function obterEntidade() {
      const e = await getEntidades(client.municipio);
      setE(e)
      setEntidades(e);
    }
    obterEntidade();
  }, [client.municipio]);

  return (
    <div className="centralizer bg-white p-20 rounded-lg">
      <form className='flex flex-col w-ful gap-7'>
        <header className='flex items-center gap-2 mb-9 justify-center'>
          <MailBox size={25} />
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
            setClient({
              estado: event.target.value
            });
          }}
        />
        <Select
          defaultOption='Selecione uma Cidade'
          label='Cidades'
          className='w-96'
          options={municipios}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setClient({
              municipio: event.target.value
            });
          }}
          required
        />
        <Select
          id='entidades'
          defaultOption='Selecione uma entidade'
          label='Entidades'
          options={entidades}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            setClient({
              entidade: event.target.value
            });
          }}
          required
        />
        <Button variant="default" className='h-12' type='button' onClick={() => setClient({
          cod_ibge: e[0]?.value
        })}>Entrar</Button>

      </form>
    </div>
  )
}
