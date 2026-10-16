import { SlidersHorizontal } from "lucide-react";
import { productCategories } from "../../data/products";
import FilterDropdown from "./FilterDropdown";
import SearchBar from "./SearchBar";

type ProductFiltersProps = {
  search: string;
  category: string;
  status: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onStatusChange: (value: string) => void;
};

export default function ProductFilters({
  search,
  category,
  status,
  onSearchChange,
  onCategoryChange,
  onStatusChange,
}: ProductFiltersProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center">
      <SearchBar value={search} onChange={onSearchChange} />
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <SlidersHorizontal className="hidden h-4 w-4 sm:block" />
        <FilterDropdown value={category} options={productCategories} onChange={onCategoryChange} allLabel="All categories" />
        <FilterDropdown value={status} options={["Active", "Draft"]} onChange={onStatusChange} allLabel="All status" />
      </div>
    </div>
  );
}
