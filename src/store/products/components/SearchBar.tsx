import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function SearchBar({ value, onChange, placeholder = "Search products..." }: SearchBarProps) {
  return (
    <label className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
      <Search className="h-4 w-4 shrink-0 text-slate-400" />
      <input type="search" value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" aria-label={placeholder} />
    </label>
  );
}

