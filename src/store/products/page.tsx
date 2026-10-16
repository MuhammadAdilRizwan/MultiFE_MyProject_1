import { useMemo, useState } from "react";
import { Grid2X2, List, Plus } from "lucide-react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import StoreLayout from "../layout/StoreLayout";
import { products, type Product } from "../data/products";
import ProductCard from "./components/ProductCard";
import ProductFilters from "./components/ProductFilters";
import ProductTable from "./components/ProductTable";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [view, setView] = useState<"grid" | "table">("table");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalTitle, setModalTitle] = useState("");
  const openAddProduct = () => {
    const basePath = window.location.pathname.startsWith("/multife-local")
      ? "/multife-local"
      : "";
    window.location.assign(`${basePath}/store/products/add`);
  };

  const filteredProducts = useMemo(() => products.filter((product) => {
    const query = search.toLowerCase();
    return (!query || `${product.name} ${product.category} ${product.fabricType}`.toLowerCase().includes(query))
      && (category === "All" || product.category === category)
      && (status === "All" || product.status === status);
  }), [search, category, status]);

  const openAction = (title: string, product: Product) => {
    setModalTitle(title);
    setSelectedProduct(product);
  };

  return (
    <StoreLayout activePage="Products">
      <div className="mx-auto max-w-[1500px] space-y-6 p-4 sm:p-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="text-sm font-semibold text-[#0E7BC1]">Catalog management</p><h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Products</h1><p className="mt-2 text-sm text-slate-500">Manage the fabrics and clothing available to customers.</p></div>
          <Button icon={<Plus className="h-4 w-4" />} onClick={openAddProduct}>Add Product</Button>
        </div>
        <ProductFilters search={search} category={category} status={status} onSearchChange={setSearch} onCategoryChange={setCategory} onStatusChange={setStatus} />
        <div className="flex items-center justify-between text-sm text-slate-500"><span>Showing {filteredProducts.length} of {products.length} products</span><div className="flex rounded-lg border border-slate-200 bg-white p-1"><button type="button" onClick={() => setView("table")} className={`rounded-md p-2 ${view === "table" ? "bg-[#E7F8FF] text-[#0E7BC1]" : "text-slate-400"}`} aria-label="Table view"><List className="h-4 w-4" /></button><button type="button" onClick={() => setView("grid")} className={`rounded-md p-2 ${view === "grid" ? "bg-[#E7F8FF] text-[#0E7BC1]" : "text-slate-400"}`} aria-label="Grid view"><Grid2X2 className="h-4 w-4" /></button></div></div>
        {view === "table" ? <ProductTable products={filteredProducts} onView={(product) => openAction("View Product", product)} onEdit={(product) => openAction("Edit Product", product)} onDelete={(product) => openAction("Delete Product", product)} /> : <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} onView={(item) => openAction("View Product", item)} onEdit={(item) => openAction("Edit Product", item)} onDelete={(item) => openAction("Delete Product", item)} />)}</div>}
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm"><span>Page 1 of 1</span><div className="flex gap-2"><button type="button" disabled className="rounded-lg border border-slate-200 px-3 py-1.5 disabled:opacity-40">Previous</button><button type="button" disabled className="rounded-lg border border-slate-200 px-3 py-1.5 disabled:opacity-40">Next</button></div></div>
      </div>
      <Modal open={selectedProduct !== null} title={modalTitle} onClose={() => setSelectedProduct(null)}><p className="text-sm text-slate-500">{selectedProduct?.name} is using mock data. Connect this action to the product API later.</p></Modal>
    </StoreLayout>
  );
}
