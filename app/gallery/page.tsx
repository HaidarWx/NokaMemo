import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PictureCard } from "@/components/PictureCard";

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFF]">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-4">
            <PictureCard />
            <PictureCard />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
