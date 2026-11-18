"use client";
import Image from "next/image";
import { useState, useEffect, useSyncExternalStore } from "react";
import dayjs from "dayjs";
interface CalendarDay {
  dayNumber: number | null;
  isToday: boolean;
  event: boolean;
}

const emptySubscribe = () => () => {};
export function Calendar() {
  /*   const [monthLabel, setMonthLabel] = useState<string>("");
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);
  const remainder = calendarDays.length % 7;
  const emptySlots = remainder === 0 ? 7 : 7 - remainder;
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
        event: false,
      }),
    );
    console.log(totalDays);
    const actualDays: CalendarDay[] = Array.from({ length: totalDays }).map(
      (_, idx) => {
        const day = idx + 1;
        return {
          dayNumber: day,
          isToday: today.date(day).isSame(today, "day"),
          event: false,
        };
      },
    );

    console.log(emptyDays);
    setCalendarDays([...emptyDays, ...actualDays]);
  }, []);
  console.log(calendarDays); */
  const todayStr = useSyncExternalStore(
    emptySubscribe,
    () => dayjs().format("YYYY-MM-DD"),
    () => null,
  );
  let monthLabel = "";
  let calendarDays: CalendarDay[] = [];

  if (todayStr) {
    const today = dayjs(todayStr);
    monthLabel = today.format("MMMM YYYY");

    const firstDayIndex = today.startOf("month").day();
    console.log(firstDayIndex);
    const startOffset = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
    const totalDays = today.daysInMonth();

    const emptyDays: CalendarDay[] = Array.from({ length: startOffset }).map(
      () => ({
        dayNumber: null,
        isToday: false,
        event: false,
      }),
    );
    const actualDays: CalendarDay[] = Array.from({ length: totalDays }).map(
      (_, idx) => {
        const day = idx + 1;
        return {
          dayNumber: day,
          isToday: today.date(day).isSame(today, "day"),
          event: false,
        };
      },
    );
    calendarDays = [...emptyDays, ...actualDays];
  }

  const weekHeaders = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const remainder = calendarDays.length % 7;
  const emptySlots = remainder === 0 ? 7 : 7 - remainder;

  console.log(calendarDays.length % 7);
  return (
    <div className="bg-[#FFA6B5] p-1 rounded-[5px] flex flex-col gap-1">
      {/* Month Label */}
      <div className="bg-[#FDEDED] flex justify-center rounded-[5px]">
        <h2 className="text-[#FFA6B5] p-1 font-bold">
          {monthLabel ? monthLabel : "Loading"}
        </h2>
      </div>
      {/* Week Cards */}
      <div className="grid grid-cols-7 gap-1">
        {weekHeaders.map((week) => (
          <div
            key={week}
            className="flex flex-col items-center text-[14px] p-1 text-[#FFA6B5] bg-[#FDEDED] font-bold rounded-[5px]"
          >
            {week}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 justify-center">
        {/* Date Cards */}
        {calendarDays.map((e, i) => {
          return (
            <div className="relative inline-block" key={i}>
              <div
                className={`flex flex-col justify-center ${e.dayNumber ? "bg-[#FDEDED]" : "bg-[#fdeded96]"} items-center  font-bold rounded-[5px]`}
              >
                <span className="text-[#FFA6B5] text-[28px] font-extrabold [-webkit-text-stroke:1px_#FFFF]">
                  {e.dayNumber ? e.dayNumber : "-"}
                </span>
              </div>
              {e.event ? (
                <Image
                  src="/images/flower.png"
                  width={64}
                  height={64}
                  className="size-5 object-contain object-center absolute -top-1 -right-2"
                  alt="Flower"
                />
              ) : (
                ""
              )}
            </div>
          );
        })}
        <div
          className={`flex justify-center bg-[#FDEDED] col-span-${emptySlots}`}
        >
          <div className="relative inline-block">
            <Image
              src="/images/flower.png"
              width={64}
              height={64}
              className="size-5 object-contain object-center absolute top-2 -right-4"
              alt="Flower"
            />
            <div className="text-[#FFA6B5] text-[28px] font-extrabold [-webkit-text-stroke:0.5px_#FFFF]">
              Calendar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
