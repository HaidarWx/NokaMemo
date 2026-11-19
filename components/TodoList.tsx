"use client";

interface DataList {
  date: string;
  list: {
    content: string;
    isDone: boolean;
  };
}
export function TodoList() {
  const dataList: DataList[] = [];
  console.log(dataList);
  return (
    <div className="bg-[#FFA6B5] h-full rounded-[5px]">
      {/* Head */}
      <div className="bg-[#FDEDED] m-1 p-2 flex justify-between items-center rounded-[5px]">
        <h1 className="text-[#FFA6B5] text-[20px] font-bold">Daily Task</h1>
        <span className="text-[#FFA6B5] text-[14px] font-bold">
          Selasa, 20 Mei 2026
        </span>
      </div>
      {/* Content */}
      <div className="bg-[#FDEDED] m-1 p-2 gap-2 flex justify-between rounded-[5px] flex-col relative">
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

          <span className="peer-checked:line-through text-[16px] text-[#FFA6B5] font-bold">
            Learning Japanese
          </span>
        </label>
      </div>
    </div>
  );
}
