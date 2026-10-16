import { ImagePlus } from "lucide-react";

export default function ImageUploader() {
  return (
    <div className="flex min-h-28 items-center justify-center rounded-xl border border-dashed border-[#10B6D9]/50 bg-[#F4FBFD] p-4 text-center">
      <div><ImagePlus className="mx-auto h-6 w-6 text-[#0E7BC1]" /><p className="mt-2 text-xs text-slate-500">Image upload placeholder</p><p className="mt-1 text-[11px] text-slate-400">Connect storage when backend is added</p></div>
    </div>
  );
}

