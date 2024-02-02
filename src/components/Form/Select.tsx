import { InputHTMLAttributes, SelectHTMLAttributes } from "react";

interface Option {
  label: string;
  value: string;
}
interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  defaultOption?: string;
  required : boolean;
}

export default function Select({
  defaultOption,
  options,
  label,
  required
}: ISelect) {
  return (
    <label className="mt-4">
      {label} <span className="text-red-500">{required && "*"}</span>
      <select className="border p-4 rounded-lg outline-none cursor-pointer">
        {defaultOption && (<option>{defaultOption}</option>)}
        {options.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
