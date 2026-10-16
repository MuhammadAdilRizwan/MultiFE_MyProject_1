import { Edit3, Eye, Trash2 } from "lucide-react";
import type { Product } from "../../data/products";

type ProductTableProps = {
  products: Product[];
  onView?: (product: Product) => void;
  onEdit?: (product: Product) => void;
  onDelete?: (product: Product) => void;
};

export default function ProductTable({ products, onView, onEdit, onDelete }: ProductTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[820px] text-left text-sm">
        <thead className="border-b border-slate-100 text-xs uppercase tracking-wider text-slate-400">
          <tr>
            <th className="px-5 py-3 font-semibold">Product</th>
            <th className="px-5 py-3 font-semibold">Category</th>
            <th className="px-5 py-3 font-semibold">Fabric</th>
            <th className="px-5 py-3 font-semibold">Price</th>
            <th className="px-5 py-3 font-semibold">Colors</th>
            <th className="px-5 py-3 font-semibold">Status</th>
            <th className="px-5 py-3 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {products.map((product) => (
            <tr key={product.id} className="transition hover:bg-slate-50">
              <td className="px-5 py-3"><div className="flex items-center gap-3"><img src={product.image} alt="" className="h-11 w-11 rounded-lg object-cover" /><span className="font-bold text-slate-800">{product.name}</span></div></td>
              <td className="px-5 py-3 text-slate-500">{product.category}</td>
              <td className="px-5 py-3 text-slate-500">{product.fabricType}</td>
              <td className="px-5 py-3 font-semibold text-slate-800">PKR {product.price.toLocaleString()}</td>
              <td className="px-5 py-3 text-slate-500">{product.colors.join(", ")}</td>
              <td className="px-5 py-3"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${product.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>{product.status}</span></td>
              <td className="px-5 py-3"><div className="flex gap-1"><button type="button" onClick={() => onView?.(product)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-[#0E7BC1]" aria-label={`View ${product.name}`}><Eye className="h-4 w-4" /></button><button type="button" onClick={() => onEdit?.(product)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-[#0E7BC1]" aria-label={`Edit ${product.name}`}><Edit3 className="h-4 w-4" /></button><button type="button" onClick={() => onDelete?.(product)} className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600" aria-label={`Delete ${product.name}`}><Trash2 className="h-4 w-4" /></button></div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

