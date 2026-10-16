import { useState, type FormEvent } from "react";
import Button from "../../components/Button";
import {
  fabricTypes,
  productCategories,
  productColors,
  productSizes,
  type Product,
  type ProductStatus,
} from "../../data/products";
import ImageUploader from "./ImageUploader";

type ProductFormProps = {
  initialProduct?: Product;
  onSubmit?: (product: Product) => void;
  onCancel?: () => void;
};

const emptyProduct: Product = {
  id: "",
  name: "",
  description: "",
  category: "Kurti",
  fabricType: "Cotton",
  price: 0,
  colors: [],
  sizes: [],
  status: "Draft",
  image: "",
  images: [],
};

export default function ProductForm({ initialProduct = emptyProduct, onSubmit, onCancel }: ProductFormProps) {
  const [product, setProduct] = useState<Product>(initialProduct);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof Product>(key: K, value: Product[K]) => {
    setProduct((current) => ({ ...current, [key]: value }));
  };

  const toggleValue = (key: "colors" | "sizes", value: string) => {
    const current = product[key];
    update(key, current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (product.name.trim() && product.description.trim() && product.price > 0) {
      onSubmit?.({ ...product, name: product.name.trim(), description: product.description.trim() });
    }
  };

  const inputClass = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-[#10B6D9] focus:ring-2 focus:ring-[#10B6D9]/15";
  const error = submitted && !product.name.trim();

  return (
    <form onSubmit={submit} className="space-y-6">
      <div className="grid gap-5 lg:grid-cols-2">
        <label className="lg:col-span-2 text-sm font-semibold text-slate-700">Product Name {error && <span className="font-normal text-red-600">· Required</span>}
          <input className={`${inputClass} ${error ? "border-red-300" : ""}`} value={product.name} onChange={(event) => update("name", event.target.value)} placeholder="e.g. Premium Lawn Kurti" />
        </label>
        <label className="lg:col-span-2 text-sm font-semibold text-slate-700">Description
          <textarea className={`${inputClass} min-h-28 resize-y`} value={product.description} onChange={(event) => update("description", event.target.value)} placeholder="Describe the fabric, fit, and ideal occasion." />
        </label>
        <label className="text-sm font-semibold text-slate-700">Category
          <select className={inputClass} value={product.category} onChange={(event) => update("category", event.target.value)}>{productCategories.map((item) => <option key={item}>{item}</option>)}</select>
        </label>
        <label className="text-sm font-semibold text-slate-700">Fabric Type
          <select className={inputClass} value={product.fabricType} onChange={(event) => update("fabricType", event.target.value)}>{fabricTypes.map((item) => <option key={item}>{item}</option>)}</select>
        </label>
        <label className="text-sm font-semibold text-slate-700">Price (PKR) {submitted && product.price <= 0 && <span className="font-normal text-red-600">· Enter a price</span>}
          <input type="number" min="1" className={inputClass} value={product.price || ""} onChange={(event) => update("price", Number(event.target.value))} placeholder="1850" />
        </label>
        <label className="text-sm font-semibold text-slate-700">Status
          <select className={inputClass} value={product.status} onChange={(event) => update("status", event.target.value as ProductStatus)}><option>Active</option><option>Draft</option></select>
        </label>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-slate-700">Available Colors</legend>
        <div className="mt-3 flex flex-wrap gap-2">{productColors.map((color) => <button type="button" key={color} onClick={() => toggleValue("colors", color)} className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${product.colors.includes(color) ? "border-[#0E7BC1] bg-[#E7F8FF] text-[#0E7BC1]" : "border-slate-200 bg-white text-slate-500 hover:border-[#10B6D9]"}`}>{color}</button>)}</div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-semibold text-slate-700">Available Sizes</legend>
        <div className="mt-3 flex flex-wrap gap-2">{productSizes.map((size) => <button type="button" key={size} onClick={() => toggleValue("sizes", size)} className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${product.sizes.includes(size) ? "border-[#0E7BC1] bg-[#E7F8FF] text-[#0E7BC1]" : "border-slate-200 bg-white text-slate-500 hover:border-[#10B6D9]"}`}>{size}</button>)}</div>
      </fieldset>

      <div>
        <p className="text-sm font-semibold text-slate-700">Product Images</p>
        <div className="mt-3"><ImageUploader /></div>
      </div>

      <div className="flex flex-wrap justify-end gap-3 border-t border-slate-100 pt-5">
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Save Product</Button>
      </div>
    </form>
  );
}
