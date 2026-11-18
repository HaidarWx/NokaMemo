import Image from "next/image";

export function PictureCard() {
  return (
    <div className=" bg-[#FFA6B5] relative w-full h-full overflow-hidden rounded-[5px]">
      <Image
        src="/images/madohomu.webp"
        alt="Madoka love Homura"
        fill
        className="object-cover object-center p-2"
      />
    </div>
  );
}
