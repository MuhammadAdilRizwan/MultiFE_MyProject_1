type FilterDropdownProps = {
  value: string;
  options: string[];
  onChange: (value: string) => void;
  allLabel: string;
};

export default function FilterDropdown({ value, options, onChange, allLabel }: FilterDropdownProps) {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)} className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none sm:w-44">
      <option value="All">{allLabel}</option>
      {options.map((option) => <option key={option} value={option}>{option}</option>)}
    </select>
  );
}

