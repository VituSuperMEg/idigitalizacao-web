import { HTMLAttributes, ReactNode } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import InputMask from 'react-input-mask';

interface IInput<T extends FieldValues> extends HTMLAttributes<HTMLInputElement>{
  name:  Path<T>;
  control: Control<T>;
  mask?: any;
  label: string;
  errors?: ReactNode;
  className?: any;
  required?: boolean;
  type?: string;
}

export function Input<T extends FieldValues>({
  name,
  control,
  mask,
  label,
  errors,
  className,
  required,
  type,
  ...rest
}: IInput<T>) {

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <label className={className}>
          {label} {required && <span className="text-red-500">*</span>}
          <InputMask
            className="border rounded-md p-3 w-full outline-none"
            mask={mask}
            type={type}
            {...field}
            {...rest}
          />
         {errors}
        </label>
      )}
    />
  )
}
