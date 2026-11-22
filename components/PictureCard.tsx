"use client";
import { useState } from "react";
import Image from "next/image";
interface ImageData {
  alt: string;
  src: string;
}

interface CardProps {
  ImageItem: ImageData;
}
export function PictureCard({ ImageItem }: CardProps) {
  const src = `/images/${ImageItem ? ImageItem.src : ""}`;
  const alt = ImageItem ? ImageItem.alt : "";

  return (
    <div className=" bg-[#e9b9c1] relative w-full h-25 md:w-full md:h-75 overflow-hidden rounded-[2px] md:rounded-[5px]">
      <Image
        src={`${src}`}
        alt={`${alt}`}
        fill
        className="object-cover object-center p-0.5 md:p-2"
      />
    </div>
  );
}
