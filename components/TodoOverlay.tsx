export function TodoOverlay() {
  return (
    <div className="bg-[#FFA6B5] p-2 w-full md:max-w-4xl mx-auto shadow-lg rounded-[5px]">
      <div className="flex flex-col gap-2 w-full">
        {/* Header Status dan Tanggal */}
        <div className="bg-[#FDEDED] w-full flex items-center justify-center p-2 rounded-[5px]">
          <h1 className="text-[16px] md:text-[30px] font-bold text-[#FFA6B5]">
            <span>Selasa, 20 Mei 2026</span> - 3 from 3 task already done
          </h1>
        </div>
        <div className="bg-[#FDEDED] w-full flex flex-col p-4 h-70 justify-between">
          {/* Todo List */}
          <div className="flex flex-col gap-1 flex-wrap max-h-72 overflow-y-auto pr-2">
            <label className="relative flex items-center gap-1">
              <input
                type="checkbox"
                className="peer shrink-0 appearance-none size-5 border-2 border-[#FFA6B5] rounded-sm bg-white checked:bg-[#FFA6B5] transition-colors cursor-pointer"
              />
              <svg
                className="pointer-events-none absolute left-0.75 items-center  size-3.5 text-[#ffffff] opacity-0 peer-checked:opacity-100 transition-opacity"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3 7.5L5.5 10L11 4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="peer-checked:line-through text-[20px] text-[#FFA6B5] font-bold">
                Lanjut Project NokaMemo
              </span>
            </label>
            <label className="relative flex items-center gap-1">
              <input
                type="checkbox"
                className="peer shrink-0 appearance-none size-5 border-2 border-[#FFA6B5] rounded-sm bg-white checked:bg-[#FFA6B5] transition-colors cursor-pointer"
              />
              <svg
                className="pointer-events-none absolute left-0.75 items-center  size-3.5 text-[#ffffff] opacity-0 peer-checked:opacity-100 transition-opacity"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M3 7.5L5.5 10L11 4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="peer-checked:line-through text-[20px] text-[#FFA6B5] font-bold">
                Communicate with other people in English
              </span>
            </label>
          </div>
          {/* Button Edit */}
          <button className="text-[#ffff] text-[20px] font-bold self-end px-6 py-2 cursor-pointer bg-[#FFA6B5] rounded-[5px] border-4 border-[#ffff]">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
