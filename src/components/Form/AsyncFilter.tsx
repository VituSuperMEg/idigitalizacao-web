import { useState } from 'react';
import { AsyncTypeahead, TypeaheadComponentProps } from 'react-bootstrap-typeahead';
import { Skeleton } from '../ui/skeleton';
import { Label } from '../ui/label';

interface AsyncTypeahead {
  placeholder?: string;
  label?: string;
  required?: boolean;
}

const RenderList = () => {
  return (
    <div className='bg-red-500 w-full h-full mt-5'>

    </div>
  )
}
const LoadingType = () =>{
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
  required
}: AsyncTypeahead) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = (query: string) => {
    setIsLoading(true);
  };

  const filterBy = () => true;

  return (
    <>
      <Label>
        {label} {required && <span className='text-red-500'>*</span>}
      </Label>
      <AsyncTypeahead
        clearButton
        className="async-typeahead"
        filterBy={filterBy}
        isLoading={isLoading}
        promptText={<LoadingType />}
        labelKey="login"
        minLength={0}
        onSearch={handleSearch}
        options={options}
        placeholder={placeholder}
        renderMenuItemChildren={(option: any) => <RenderList {...option} />}
      />
    </>
  );
};
