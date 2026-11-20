import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MemoCard } from "@/components/MemoCard";
import { AddMemo } from "@/components/AddMemo";

export default function MemoPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFF]">
        {/* Per Tanggal */}
        <div>
          <div className="bg-[#FDEDED] flex justify-center p-2 mx-4 my-2 rounded-[5px]">
            <h1 className="font-bold text-[24px] text-[#FFA6B5]">
              Selasa, 20 Mei 2026
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-4">
            <MemoCard />
            <MemoCard />
            <MemoCard />
            <AddMemo />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
