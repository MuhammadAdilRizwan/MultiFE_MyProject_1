import { useState } from "react";
import { ArrowRight, Boxes, CheckCircle2, Clock3, DollarSign, Plus, ShoppingBag, X } from "lucide-react";
import Button from "../components/Button";
import DataTable, { type Column } from "../components/DataTable";
import Modal from "../components/Modal";
import StatCard from "../components/StatCard";
import StatusBadge, { type Status } from "../components/StatusBadge";
import StoreLayout from "../layout/StoreLayout";

type Order = {
  id: string;
  customer: string;
  date: string;
  status: Status;
  amount: string;
};

type Product = {
  name: string;
  category: string;
  price: string;
  image: string;
};

const orders: Order[] = [
  { id: "#MF-1048", customer: "Ayesha Khan", date: "Oct 16, 2026", status: "Processing", amount: "PKR 18,500" },
  { id: "#MF-1047", customer: "Sara Ahmed", date: "Oct 15, 2026", status: "Pending", amount: "PKR 12,800" },
  { id: "#MF-1046", customer: "Hiba Malik", date: "Oct 15, 2026", status: "Completed", amount: "PKR 24,200" },
  { id: "#MF-1045", customer: "Noor Fatima", date: "Oct 14, 2026", status: "Completed", amount: "PKR 9,750" },
];

const products: Product[] = [
  { name: "Lawn Blue Bloom", category: "Everyday", price: "PKR 1,850 / yd", image: "/assets/fabric-lawn.png" },
  { name: "Silk Heritage Gold", category: "Luxury", price: "PKR 5,400 / yd", image: "/assets/fabric-silk.png" },
  { name: "Embroidered Navy", category: "Festive", price: "PKR 6,800 / yd", image: "/assets/fabric-embroidered.png" },
];

const orderColumns: Column<Order>[] = [
  { key: "id", label: "Order ID", render: (order) => <span className="font-bold text-slate-800">{order.id}</span> },
  { key: "customer", label: "Customer Name", render: (order) => order.customer },
  { key: "date", label: "Date", render: (order) => <span className="whitespace-nowrap">{order.date}</span> },
  { key: "status", label: "Status", render: (order) => <StatusBadge status={order.status} /> },
  { key: "amount", label: "Amount", render: (order) => <span className="font-semibold text-slate-800">{order.amount}</span> },
];

function ProductRow({ product }: { product: Product }) {
  return (
    <div className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-slate-50">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-100 bg-slate-50">
        <img src={product.image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-bold text-slate-800">{product.name}</p>
        <p className="mt-0.5 text-xs text-slate-400">{product.category}</p>
      </div>
      <p className="whitespace-nowrap text-sm font-semibold text-slate-700">{product.price}</p>
    </div>
  );
}

export default function StoreDashboardPage() {
  const [modal, setModal] = useState<string | null>(null);
  const openAddProduct = () => {
    const basePath = window.location.pathname.startsWith("/multife-local")
      ? "/multife-local"
      : "";
    window.location.assign(`${basePath}/store/products/add`);
  };

  return (
    <StoreLayout>
      <div className="mx-auto max-w-[1500px] space-y-8 p-4 sm:p-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold text-[#0E7BC1]">Friday, October 16, 2026</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Store overview</h1>
            <p className="mt-2 text-sm text-slate-500">Manage your products, orders, and custom clothing experience.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button icon={<Plus className="h-4 w-4" />} onClick={openAddProduct}>Add Product</Button>
            <Button variant="secondary" icon={<Plus className="h-4 w-4" />} onClick={() => setModal("Add Template")}>Add Template</Button>
          </div>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          <StatCard label="Total Products" value="248" change="+12.5%" icon={Boxes} iconClassName="bg-blue-50 text-[#0E7BC1]" />
          <StatCard label="Total Orders" value="1,284" change="+8.2%" icon={ShoppingBag} iconClassName="bg-violet-50 text-violet-600" />
          <StatCard label="Pending Orders" value="42" change="+3.1%" positive={false} icon={Clock3} iconClassName="bg-amber-50 text-amber-600" />
          <StatCard label="Completed Orders" value="1,198" change="+10.4%" icon={CheckCircle2} iconClassName="bg-emerald-50 text-emerald-600" />
          <StatCard label="Total Revenue" value="PKR 2.4M" change="+14.8%" icon={DollarSign} iconClassName="bg-orange-50 text-orange-600" />
        </section>

        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,1fr)]">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 p-5">
              <div><h2 className="font-bold text-slate-900">Recent orders</h2><p className="mt-1 text-xs text-slate-400">Latest customer activity</p></div>
              <Button variant="ghost" onClick={() => setModal("All Orders")} className="px-2 text-xs">View all <ArrowRight className="h-3.5 w-3.5" /></Button>
            </div>
            <DataTable columns={orderColumns} rows={orders} />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div><h2 className="font-bold text-slate-900">Recent products</h2><p className="mt-1 text-xs text-slate-400">Your latest catalog additions</p></div>
              <Button variant="ghost" onClick={() => setModal("All Products")} className="px-2 text-xs">View all <ArrowRight className="h-3.5 w-3.5" /></Button>
            </div>
            <div className="mt-4 space-y-2">{products.map((product) => <ProductRow key={product.name} product={product} />)}</div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div><h2 className="font-bold text-slate-900">Quick actions</h2><p className="mt-1 text-sm text-slate-500">Jump straight into the tasks you manage most.</p></div>
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" icon={<Plus className="h-4 w-4" />} onClick={() => setModal("Add Product")}>Add Product</Button>
              <Button variant="secondary" icon={<Plus className="h-4 w-4" />} onClick={() => setModal("Add Template")}>Add Template</Button>
              <Button variant="secondary" icon={<ShoppingBag className="h-4 w-4" />} onClick={() => setModal("All Orders")}>View Orders</Button>
            </div>
          </div>
        </section>
      </div>
      <Modal open={modal !== null} title={modal ?? ""} onClose={() => setModal(null)}>
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#0E7BC1]"><Plus className="h-5 w-5" /></div>
          <p className="mt-4 text-sm text-slate-500">This is a mock action for the store dashboard. Backend workflows can be connected here later.</p>
          <Button className="mt-5" onClick={() => setModal(null)}><X className="h-4 w-4" />Close</Button>
        </div>
      </Modal>
    </StoreLayout>
  );
}
