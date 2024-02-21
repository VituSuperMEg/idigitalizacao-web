import { ReactNode } from "react";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import InputMask from 'react-input-mask';

interface IInput<T> {
  name: keyof T;
  control: Control<T>;
  mask?: any;
  label: string;
  errors: ReactNode;
}

export function Input<T>({
  name,
  control,
  mask,
  label,
  errors
}: IInput<T>) {

  return (
    <Controller
      name={name as string}
      control={control}
      render={({ field }) => (
        <label>
          {label}
          <InputMask
            className="border rounded-md p-3 w-full outline-none"
            mask={mask}
            {...field}
          />
         {errors}
        </label>
      )}
    />
  )
}
