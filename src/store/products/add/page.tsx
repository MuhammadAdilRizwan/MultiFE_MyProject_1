import ProductForm from "../components/ProductForm";
import StoreLayout from "../../layout/StoreLayout";

export default function AddProductPage() {
  return (
    <StoreLayout activePage="Products">
      <div className="mx-auto max-w-4xl p-4 sm:p-8">
        <div className="mb-6"><p className="text-sm font-semibold text-[#0E7BC1]">Catalog management</p><h1 className="mt-1 text-2xl font-bold text-slate-900">Add Product</h1><p className="mt-2 text-sm text-slate-500">Create a new fabric or clothing item for your store.</p></div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"><ProductForm onCancel={() => undefined} /></div>
      </div>
    </StoreLayout>
  );
}

