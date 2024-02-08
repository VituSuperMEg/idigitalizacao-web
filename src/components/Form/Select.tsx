import { InputHTMLAttributes, SelectHTMLAttributes } from "react";

interface Option {
  label: string;
  value: string;
}
interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  defaultOption?: string;
  required?: boolean;
  handleChange : any;
}

export default function Select({
  defaultOption,
  options,
  label,
  required,
  handleChange
}: ISelect) {
  return (
    <label className="flex flex-col">
      {label} <span className="text-red-500">{required && "*"}</span>
      <select className="border p-4 rounded-lg outline-none cursor-pointer" onChange={handleChange}>
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
