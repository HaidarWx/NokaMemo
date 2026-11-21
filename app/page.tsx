import { Navbar } from "../components/Navbar";
import { Footer } from "@/components/Footer";
import { MemoCard } from "@/components/MemoCard";
import { PictureCard } from "@/components/PictureCard";
import { Calendar } from "@/components/Calendar";
import { Quotes } from "@/components/Quotes";
import { TodoList } from "@/components/TodoList";
import { AddMemo } from "@/components/AddMemo";
import { DateOverlay } from "@/components/DateOverlay";
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MemoCard />
          <PictureCard ImageItem={ImageItem[1]} Index={0} />
          <Calendar />
          <Quotes />
          <TodoList />
          <AddMemo />
          <DateOverlay />
        </div>
      </main>
      <Footer />
    </>
  );
}
