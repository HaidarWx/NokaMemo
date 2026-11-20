import Image from "next/image";

export function DateOverlay() {
  return (
    <div className="hidden fixed inset-0 z-50  items-center justify-center bg-[#ffffff3d]">
      <div className="relative inline-block">
        <div className="flex flex-col items-center bg-[#FDEDED] h-120 w-135 rounded-[10px] ">
          <div className="flex flex-col items-center">
            {/* Week */}
            <div className="text-[64px] font-bold text-[#FFA6B5]">Wed</div>
            {/* Date */}
            <div className="text-[150px] font-bold text-[#FFA6B5]">2</div>
          </div>
          <hr className="border-t-10 w-full border-[#FFA6B5] my-4" />
          <div className="flex gap-2 items-center justify-center">
            {/* Content */}
            <span className="font-bold text-[#FFA6B5] text-[24px]">
              1. Hari Pertama proyek NokaMemo
            </span>
            {/* Default */}
            <button className="cursor-pointer bg-[#FFA6B5] text-[#ffff] px-2 py-1 font-bold rounded-[5px]">
              Edit
            </button>
            {/* Edit */}
            <div className="gap-2 hidden">
              {/* Tombol ✔ */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-square text-[#FFA6B5] font-bold cursor-pointer text-[24px]"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
              </svg>
              {/* Tombol X */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-square text-[#FFA6B5] font-bold cursor-pointer text-2xl"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </div>
          </div>
        </div>
        <Image
          src="/images/flower_L.png"
          width={64}
          height={64}
          className="size-40 object-contain object-center absolute -top-10 -right-15"
          alt="Flower"
        />
      </div>
    </div>
  );
}
