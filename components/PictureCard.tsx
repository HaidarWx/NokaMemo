import Image from "next/image";
interface ImageData {
  alt: string;
  src: string;
}
interface CardProps {
  ImageItem: ImageData;
}
export function PictureCard({ ImageItem }: CardProps) {
  const src = `/images/${ImageItem.src}`;
  const alt = ImageItem.alt;
  console.log(ImageItem);
  return (
    <div className=" bg-[#e9b9c1] relative w-full h-100 md:h-75 overflow-hidden rounded-[5px]">
      <Image
        src={`${src}`}
        alt={`${alt}`}
        fill
        className="object-cover object-center p-2"
      />
    </div>
  );
}
