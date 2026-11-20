import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PictureCard } from "@/components/PictureCard";
import { GallerySlider } from "@/components/GallerySlider";

interface ImageData {
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
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-4">
            {ImageItem.map((e, i) => (
              <PictureCard key={i} ImageItem={e} />
            ))}
          </div>
          <GallerySlider />
        </div>
      </main>
      <Footer />
    </>
  );
}
