"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
interface CalendarDay {
  dayNumber: number | null;
  isToday: boolean;
}

export function Calendar() {
  const [monthLabel, setMonthLabel] = useState<string>("");
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);

  useEffect(() => {
    const today = dayjs();
    setMonthLabel(today.format("MMMM YYYY"));

    const firstDayIndex = today.startOf("month").day();
    const startOffset = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
    const totalDays = today.daysInMonth();

    const emptyDays: CalendarDay[] = Array.from({ length: startOffset }).map(
      () => ({
        dayNumber: null,
        isToday: false,
      }),
    );
    console.log(totalDays);
    const actualDays: CalendarDay[] = Array.from({ length: totalDays }).map(
      (_, idx) => {
        const day = idx + 1;
        return {
          dayNumber: day,
          isToday: today.date(day).isSame(today, "day"),
        };
      },
    );

    console.log(emptyDays);
    setCalendarDays([...emptyDays, ...actualDays]);
  }, []);
  console.log(calendarDays);
  const weekHeaders = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="bg-[#FFA6B5] p-1 rounded-[5px]">
      <div className="grid grid-cols-7 gap-1">
        {weekHeaders.map((week) => (
          <div
            key={week}
            className="flex flex-col items-center text-[#FFA6B5] bg-[#FDEDED] font-bold rounded-[5px]"
          >
            {week}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        <div className="relative inline-block">
          <div className="flex h-15 flex-col  items-center bg-[#FDEDED] font-bold rounded-[5px]">
            <span className="text-[#FFA6B5] text-[16px] ">Mon</span>
            <span className="text-[#FFA6B5] text-[36px] font-bold -mt-3 [-webkit-text-stroke:1px_#FFFF]">
              1
            </span>
          </div>
          <Image
            src="/images/flower.png"
            width={64}
            height={64}
            className="size-5 object-contain object-center absolute -top-1 -right-2"
            alt="Flower"
          />
        </div>
      </div>
    </div>
  );
}
