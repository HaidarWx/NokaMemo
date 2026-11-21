import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GalleryContent } from "@/components/GalleryContent";
export interface ImageData {
  alt: string;
  src: string;
}
const ImageItem: ImageData[] = [
  { alt: "Madohomu", src: "madohomu_1.jpg" },
  { alt: "Madohomu", src: "madohomu.webp" },
];
export default function Gallery() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FFFF]">
        <GalleryContent items={ImageItem} />
      </main>
      <Footer />
    </>
  );
}
