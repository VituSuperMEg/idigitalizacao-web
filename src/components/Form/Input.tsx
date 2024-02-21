import { HTMLAttributes, ReactNode } from "react";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import InputMask from 'react-input-mask';

interface IInput<T> extends HTMLAttributes<HTMLInputElement>{
  name: keyof T;
  control: Control<T>;
  mask?: any;
  label: string;
  errors: ReactNode;
  className?: any;
  required?: boolean;
}

export function Input<T>({
  name,
  control,
  mask,
  label,
  errors,
  className,
  required,
  ...rest
}: IInput<T>) {

  return (
    <Controller
      name={name as string}
      control={control}
      render={({ field }) => (
        <label className={className}>
          {label} {required && <span className="text-red-500">*</span>}
          <InputMask
            className="border rounded-md p-3 w-full outline-none"
            mask={mask}
            {...field}
            {...rest}
          />
         {errors}
        </label>
      )}
    />
  )
}
