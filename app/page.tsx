import { Navbar } from "../components/Navbar";
import { Footer } from "@/components/Footer";
import { HomeContent } from "@/components/HomeContent";
interface ImageData {
  alt: string;
  src: string;
}
const ImageItem: ImageData[] = [
  { alt: "Madohomu", src: "madohomu_1.jpg" },
  { alt: "Madohomu", src: "madohomu.webp" },
];
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-4">
        <HomeContent />
      </main>
      <Footer />
    </>
  );
}
