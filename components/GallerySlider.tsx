"use client";
import { useState } from "react";
import Image from "next/image";
import { ImageData } from "@/app/gallery/page";
interface Items {
  items: ImageData[];
  initialIndex: number;
}
export function GallerySlider({ items, initialIndex }: Items) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  if (items.length === 0) {
    return;
  }
  const src = items[currentIndex].src;
  const alt = items[currentIndex].alt;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="relative flex bg-[#FFA6B5] w-fit rounded-[5px] overflow-hidden p-2">
      <div className="flex flex-col items-center bg-[#FFA6B5] ">
        <div className="flex p-5 gap-2 justify-center">
          <div className="bg-[#e9b9c1] relative w-100 h-100 md:h-75 overflow-hidden">
            <Image
              className="object-cover object-center"
              alt={`${alt}`}
              fill
              src={`/images/${src}`}
            />
          </div>
          <div className="flex flex-col items-center gap-4 w-100">
            <h1 className="text-[#ffff] font-bold text-[24px]">{alt}</h1>
            <span className="text-[#ffff] text-[16px]">
              <b>NokaMemo</b> adalah website yang dapat menyimpan semacam diary,
              memo, kalender pribadi dan hal hal lainnya yang bersifat pribadi.
            </span>
          </div>
        </div>
        <div className="flex">
          <div
            className=" inset-y-0 left-0 border-4 border-[#FFA6B5] flex cursor-pointer items-center justify-center bg-white"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-chevron-compact-left text-[#FFA6B5]"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"
              />
            </svg>
          </div>
          <button className="bg-[#FDEDED] rounded-[5px] p-3 text-[#FFA6B5] font-bold border-2 border-solid border-[#FFFF] cursor-pointer">
            Show at Home
          </button>
          <div
            className=" inset-y-0 right-0 border-4 border-[#FFA6B5] flex cursor-pointer items-center justify-center bg-white"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-chevron-compact-right text-[#FFA6B5]"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Prev */}

      {/* Next */}
    </div>
  );
}
