import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { getMonth } from "../util/util";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import React from "react";
import {
  setCalendarMonth,
  setDaySelected,
} from "../store/actions/ProductAction";

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState<number>(
    dayjs().month()
  );
  const [currentMonth, setCurrentMonth] = useState<dayjs.Dayjs[][]>(getMonth());
  const { monthIndex, daySelected } = useAppSelector(
    (state) => state.calendarStore
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  const handlePrevMonth = () => {
    setCurrentMonthIdx(currentMonthIdx - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonthIdx(currentMonthIdx + 1);
  };

  const getDayClass = (day: Dayjs) => {
    const format = "DD-MM-YYYY";
    const now = dayjs().format(format);
    const currentDay = day.format(format);
    const selected = daySelected && daySelected.format(format);
    if (now === currentDay) {
      return "bg-blue-500 text-white border-circle";
    } else if (currentDay === selected) {
      return "bg-blue-100 border-circle text-blue-600 fonrt-bold";
    } else {
      return "";
    }
  };

  const setSmallCalendarMonth = (month: number) => {
    dispatch(setCalendarMonth(month));
  };

  return (
    <div className="border-bottom-1 px-8">
      <div className=" py-6 w-full">
        <header className="flex justify-content-between">
          <button onClick={handlePrevMonth} className="bg-white border-none">
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_left
            </span>
          </button>
          <p className="text-gray-500 font-bold">
            {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
              "MMMM YYYY"
            )}
          </p>
          <button onClick={handleNextMonth} className="bg-white border-none">
            <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
              chevron_right
            </span>
          </button>
        </header>
        <div className="grid-display grid-cols-7 grid-rows-6">
          {currentMonth[0].map((day: Dayjs, i: number) => (
            <span key={i} className="text-sm py-1 text-center">
              {day.format("dd").charAt(0)}
            </span>
          ))}
          {currentMonth.map((row: Dayjs[], i: number) => (
            <React.Fragment key={i}>
              {row.map((day: Dayjs, idx: number) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSmallCalendarMonth(currentMonthIdx);
                    dispatch(setDaySelected(day));
                  }}
                  className={`py-3 w-full border-none ${getDayClass(day)}`}
                >
                  <span className="text-sm">{day.format("D")}</span>
                </button>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
