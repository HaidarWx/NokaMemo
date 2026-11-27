import { TbEditFilled } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";

export function TaskOverlay() {
  return (
    <div className="bg-[#FFA6B5] w-full md:max-w-4xl mx-auto shadow-lg rounded-[5px]">
      <div className="flex flex-col gap-1 p-2">
        <div className="bg-[#FDEDED] px-3">
          <input
            className="text-[#FFA6B5] w-full font-bold text-[32px]"
            defaultValue="Communicate with other people in English"
          />
        </div>
        {/* Delete and Edit Button */}
        <div className="bg-[#FDEDED] flex gap-1 justify-end items-center p-2">
          <div className="cursor-pointer border-4 border-[#FFA6B5] px-2 rounded-[5px] select-none">
            <AiFillDelete className="text-[#FFA6B5]" />
          </div>
          <div className="cursor-pointer border-4 border-[#FFA6B5] px-2 rounded-[5px] select-none">
            <TbEditFilled className="text-[#FFA6B5]" />
          </div>
        </div>
      </div>
    </div>
  );
}
