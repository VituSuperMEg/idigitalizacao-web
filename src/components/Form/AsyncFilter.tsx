import { useState } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Skeleton } from '../ui/skeleton';
import { Label } from '../ui/label';
import { api } from '@/services/api';

interface AsyncTypeahead {
  placeholder?: string;
  label?: string;
  required?: boolean;
  path: string;
  className : string;
}

const RenderList = (item: any) => {
  return (
    <div className='w-full h-full mt-5'>
      <div className='bg-slate-50 shadow p-4 border-l-2 border-primary flex flex-col' style={{
        zIndex: 9999
      }}>
        <span>
          <strong>Id:</strong> {item.id}
        </span>
        <span>
          <strong>Descrição:</strong> {item.descricao}
        </span>
      </div>
    </div>
  )
}
const LoadingType = () => {
  return (
    <div className='flex flex-wrap gap-2'>
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
    </div>
  )
}
export const AsyncFilter = ({
  placeholder,
  label,
  required,
  path,
  className
}: AsyncTypeahead) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = async (query: string) => {
    setIsLoading(true);

    const response = await api.get(`/${path}/list-options/` + query);
    setOptions(response.data.data);
  };

  const filterBy = () => true;

  return (
    <>
      <Label>
        {label} {required && <span className='text-red-500'>*</span>}
      </Label>
      <AsyncTypeahead
        clearButton
        className={`async-typeahead ${className}`}
        filterBy={filterBy}
        isLoading={isLoading}
        promptText={<LoadingType />}
        labelKey="descricao"
        minLength={0}
        onSearch={handleSearch}
        options={options}
        placeholder={placeholder}
        renderMenuItemChildren={(option: any) => <RenderList {...option} />}
      />
    </>
  );
};
