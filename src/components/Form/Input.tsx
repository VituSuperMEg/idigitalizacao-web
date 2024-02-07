import { InputHTMLAttributes } from "react";
import InputMask from 'react-input-mask';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  mask?: string;
  error?: string;
  name: string;
  register: UseFormRegisterReturn;
}

export default function Input({
  label,
  mask,
  error,
  name,
  register,
  ...rest
}: InputProps) {

  return (
    <div className="w-3/6 mt-5">
      <div>
        <label>
          {label}
        </label>
      </div>
      <div>
        {mask ? (
          <InputMask
            mask={mask}
            className="border rounded-md p-3 w-full outline-none"
            type="text"
            {...register(name)}
            {...rest}
          />
        ) : (
          <input
            className="border rounded-md p-3 w-full outline-none"
            type="text"
            {...register(name)}
            {...rest}
          />
        )}
      </div>
      <div className="block">
        <span className="text-red-500">{error}</span>
      </div>
    </div>
  );
}
