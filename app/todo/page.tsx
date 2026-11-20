import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MemoCard } from "@/components/MemoCard";
import { AddMemo } from "@/components/AddMemo";

export default function MemoPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFF]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-4"></div>
      </main>
      <Footer />
    </>
  );
}
