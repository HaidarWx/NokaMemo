"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface DayItem {
  dayName: string;
  dayNumber: number;
  isToday: boolean;
}

export function Calendar() {
  const [weekDays, setWeekDays] = useState<DayItem[]>([]);

  useEffect(() => {
    const today = new Date();
    const currentDay = today.getDay();

    const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay;

    const monday = new Date(today);
    monday.setDate(today.getDate() + diffToMonday);

    const days = Array.from({ length: 7 }, (_, index) => {
      const date = new Date(monday);
      date.setDate(monday.getDate() + index);

      return {
        dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
        dayNumber: date.getDate(),
        isToday: date.toDateString() === today.toDateString(),
      };
    });

    setWeekDays(days);
  }, []);
  return (
    <div className="bg-[#FFA6B5] p-1 rounded-[5px]">
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
