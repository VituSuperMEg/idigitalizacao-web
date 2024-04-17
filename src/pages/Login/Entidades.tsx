import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Select from '@/components/Form/Select';
import { useAuth } from '@/store/auth';
import { getCidades, getDB, getEntidades, getEstados } from '@/providers/providers';
import { MailBox } from 'solar-icons-react';

interface Entidade {
  label: string;
  value: string;
}

export default function Entidades() {
  const setClient = useAuth(state => state.setClient);
  const client = useAuth(state => state.client);
  const setEntidade = useAuth(state => state.setEntidade);

  const [estados, setEstados] = useState<Entidade[]>([]);
  const [municipios, setMunicipios] = useState<Entidade[]>([]);
  const [entidades, setEntidades] = useState<Entidade[]>([]);
  const [e, setE] = useState<Entidade[]>([]);

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
      setClient({
        entidade: e[0]?.value
      })
    }
    obterEntidade();
  }, [client.municipio]);


  useEffect(() => {
    async function obterEntidade() {
      const e = await getDB(client.entidade);
      setEntidade(e);
    }
    obterEntidade();
  }, [client.entidade, setEntidade]);

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
