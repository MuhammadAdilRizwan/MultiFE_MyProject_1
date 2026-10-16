import ProductForm from "../components/ProductForm";
import StoreLayout from "../../layout/StoreLayout";
import { products } from "../../data/products";

export default function EditProductPage() {
  return (
    <StoreLayout activePage="Products">
      <div className="mx-auto max-w-4xl p-4 sm:p-8">
        <div className="mb-6"><p className="text-sm font-semibold text-[#0E7BC1]">Catalog management</p><h1 className="mt-1 text-2xl font-bold text-slate-900">Edit Product</h1><p className="mt-2 text-sm text-slate-500">Update the product details shown to customers.</p></div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"><ProductForm initialProduct={products[0]} onCancel={() => undefined} /></div>
      </div>
    </StoreLayout>
  );
}

