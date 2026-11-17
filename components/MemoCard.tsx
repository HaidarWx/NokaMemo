import Image from "next/image";

export function MemoCard() {
  return (
    <div className=" bg-[#FFA6B5] rounded-[5px]">
      <div className="flex flex-col gap-1 p-1 ">
        <div className="flex justify-between bg-[#FDEDED] rounded-[5px] py-4 px-2">
          <h3 className="text-[#FFA6B5] font-bold">Introduce NokaMemo</h3>
          <span className="text-[#FFA6B5] font-bold">Selasa, 20 Mei 2026</span>
        </div>
        <div className="bg-[#FDEDED] text-[#FFA6B5] rounded-[5px] p-2">
          <h3 className="font-bold">New Project : NokaMemo</h3>
          <p>
            <b>NokaMemo</b> adalah website yang dapat menyimpan semacam diary,
            memo, kalender pribadi dan hal hal lainnya yang bersifat pribadi.
          </p>
          <div className="flex gap-5 justify-center">
            <Image
              src="/images/LS.png"
              alt="Ls"
              width={100}
              height={119}
              className="object-contain object-center size-20 md:size-38"
            />

            <Image
              src="/images/SP.png"
              alt="Ls"
              width={100}
              height={119}
              className="object-contain object-center size-20 md:size-38"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
