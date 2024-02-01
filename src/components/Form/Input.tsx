import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputTypeAttribute> {
  id : string;
  label: string;
  name?: string;
  required?: boolean;
  error?: string;
};

export default function Input<T>({
  label,
  id,
  name,
  required = false,
  autoFocus,
  error,
  ...rest
}: InputProps) {
  return (
    <div className="w-3/6 mt-5">
      <div>
        <label>
          {label} <span className="text-red-500">{required && "*"}</span>
        </label>
      </div>
      <div>
        <input
          autoFocus={autoFocus}
          id={id}
          className="border rounded-md p-3 w-full"
          type="text"
          {...rest}
        />
      </div>
      <div className="block">
        <span className="text-red-500">{error}</span>
      </div>
    </div>
  );
}
