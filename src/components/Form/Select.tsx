
interface Option {
  label: string;
  value: string;
}
interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  defaultOption?: string;
  required?: boolean;
  handleChange?: any;
  className?: string;
}

export default function Select({
  defaultOption,
  options,
  label,
  required,
  handleChange,
  className,
  ...rest
}: ISelect) {
  return (
    <label className="flex flex-col">
       <header className="flex items-center gap-1">
       {label} <span className="text-red-500">{required && "*"}</span>
       </header>
      <select className={`border p-4 rounded-lg outline-none cursor-pointer ${className}`} onChange={handleChange} {...rest}>
        {defaultOption && (<option>{defaultOption}</option>)}
        {options && options.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
