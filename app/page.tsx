import { Navbar } from "../components/Navbar";
import { Footer } from "@/components/Footer";
import { MemoCard } from "@/components/MemoCard";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MemoCard />
          <MemoCard />
          <MemoCard />
        </div>
      </main>
      <Footer />
    </>
  );
}
