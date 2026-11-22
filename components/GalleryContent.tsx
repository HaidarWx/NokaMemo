"use client";
import { useState } from "react";
import { PictureCard } from "./PictureCard";
import { GallerySlider } from "./GallerySlider";
import { ImageData } from "@/app/gallery/page";

export function GalleryContent({ items }: { items: ImageData[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  console.log(items);
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-2 max-w-7xl mx-auto px-4 py-4">
        {items.map((e, i) => (
          <div
            key={i}
            onClick={() => setSelectedIndex(i)}
            className="cursor-pointer"
          >
            <PictureCard ImageItem={e} />
          </div>
        ))}
        <div className=" bg-[#FFA6B5] h-full rounded-xs md:rounded-[5px] cursor-pointer">
          <div className="flex flex-col items-center justify-center bg-[#FDEDED] md:h-40 m-1">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-plus-lg text-[#FFA6B5] font-bold"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                />
              </svg>
            </div>
            <div className="text-[#FFA6B5] text-center items-center font-bold text-[10px] md:text-[24px]">
              Add more your image here...
            </div>
          </div>
        </div>
      </div>
      {selectedIndex !== null && (
        <div
          className={`flex fixed inset-0 z-50 items-center justify-center backdrop-blur-xs bg-[#ffffff3d]`}
          onClick={() => setSelectedIndex(null)}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-full md:w-fit">
            <GallerySlider items={items} initialIndex={selectedIndex} />
          </div>
        </div>
      )}
    </div>
  );
}
