import type { ReactNode } from "react";

type Column<T> = {
  key: string;
  label: string;
  render: (row: T) => ReactNode;
};

type DataTableProps<T> = {
  columns: Column<T>[];
  rows: T[];
  emptyMessage?: string;
};

export default function DataTable<T>({
  columns,
  rows,
  emptyMessage = "No records found.",
}: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[650px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-100 text-xs uppercase tracking-wider text-slate-400">
            {columns.map((column) => (
              <th key={column.key} className="px-5 py-3 font-semibold">{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.length ? rows.map((row, index) => (
            <tr key={index} className="text-slate-600 transition-colors hover:bg-slate-50">
              {columns.map((column) => (
                <td key={column.key} className="px-5 py-4">{column.render(row)}</td>
              ))}
            </tr>
          )) : (
            <tr>
              <td colSpan={columns.length} className="px-5 py-10 text-center text-slate-400">{emptyMessage}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export type { Column };
