import { Edit3, Eye, MoreVertical, Trash2 } from "lucide-react";
import type { Product } from "../../data/products";

type ProductCardProps = {
  product: Product;
  onView?: (product: Product) => void;
  onEdit?: (product: Product) => void;
  onDelete?: (product: Product) => void;
};

export default function ProductCard({ product, onView, onEdit, onDelete }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#F4FBFD]">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        <span className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold ${product.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>{product.status}</span>
      </div>
      <div className="space-y-3 p-4">
        <div>
          <h3 className="font-bold text-slate-900">{product.name}</h3>
          <p className="mt-1 text-xs text-slate-400">{product.category} · {product.fabricType}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <p className="font-bold text-[#0E7BC1]">PKR {product.price.toLocaleString()}</p>
          <div className="flex items-center gap-1">
            <button type="button" onClick={() => onView?.(product)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-[#0E7BC1]" aria-label={`View ${product.name}`}><Eye className="h-4 w-4" /></button>
            <button type="button" onClick={() => onEdit?.(product)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-[#0E7BC1]" aria-label={`Edit ${product.name}`}><Edit3 className="h-4 w-4" /></button>
            <button type="button" onClick={() => onDelete?.(product)} className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600" aria-label={`Delete ${product.name}`}><Trash2 className="h-4 w-4" /></button>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-400">
          <span>{product.colors.length} colors</span>
          <span>{product.sizes.join(", ")}</span>
          <MoreVertical className="h-4 w-4" />
        </div>
      </div>
    </article>
  );
}

