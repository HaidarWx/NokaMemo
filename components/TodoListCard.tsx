"use client";
import { TodoList } from "@/data/todos";
interface TodoListCardProps {
  todoList: TodoList;
}

export function TodoListCard({ todoList }: TodoListCardProps) {
  if (todoList.list.length === 0) return;
  console.log(todoList);
  return (
    <div className="bg-[#FFA6B5] h-full rounded-[5px] cursor-pointer">
      {/* Head */}
      <div className="bg-[#FDEDED] m-1 p-2 flex justify-between items-center rounded-[5px]">
        <h1 className="text-[#FFA6B5] text-[20px] font-bold">Daily Task</h1>
        <span className="text-[#FFA6B5] text-[14px] font-bold">
          {todoList.date}
        </span>
      </div>
      {/* Content */}
      <div className="bg-[#FDEDED] m-1 p-2 gap-2 flex justify-between rounded-[5px] flex-col relative">
        {todoList.list.map((e, i) => (
          <label
            className="relative flex items-center gap-1 cursor-pointer"
            key={i}
          >
            <input
              type="checkbox"
              className="peer shrink-0 focus:outline-none appearance-none size-5 border-2 border-[#FFA6B5] rounded-sm bg-white cursor-pointer"
            />
            <svg
              className="pointer-events-none absolute left-0.75 items-center cursor-pointer  size-3.5 text-[#ffffff] opacity-0 "
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

            <span className=" text-[16px] text-[#FFA6B5] font-bold cursor-pointer">
              {e.content}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
