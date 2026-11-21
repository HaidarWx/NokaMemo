"use client";
import { useState } from "react";
import Image from "next/image";
import { PictureCard } from "./PictureCard";
import { GallerySlider } from "./GallerySlider";
import { ImageData } from "@/app/gallery/page";

export function GalleryContent({ items }: { items: ImageData[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  console.log(items);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-4">
        {items.map((e, i) => (
          <div key={i} onClick={() => setSelectedIndex(i)}>
            <PictureCard ImageItem={e} />
          </div>
        ))}
      </div>
      {selectedIndex !== null && (
        <div
          className={`flex fixed inset-0 z-50 items-center justify-center backdrop-blur-xs bg-[#ffffff3d]`}
          onClick={() => setSelectedIndex(null)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <GallerySlider items={items} initialIndex={selectedIndex} />
          </div>
        </div>
      )}
    </div>
  );
}
