import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getAllEvents } from "../store/actions/ProductAction";
import { ISavedEvents } from "../model/savedEvents";
interface DayProps {
  day: Dayjs;
  rowIdx: number;
}
export default function Day({ day, rowIdx }: DayProps) {
  const [dayEvents, setDayEvents] = useState<ISavedEvents[]>([]);
  const { savedEvents } = useAppSelector((state) => state.calendarStore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const events = savedEvents.filter((evt: ISavedEvents) => {
      return dayjs(evt.date).format("DD-MM-YY") === day.format("DD-MM-YY");
    });

    setDayEvents(events);
  }, [savedEvents, day]);

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white border-circle"
      : "";
  };
  return (
    <div className="border-2 border-gray-200 flex flex-column">
      <header className="flex flex-column align-items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      {dayEvents.slice(0, 2).map((evt, index) => (
        <div
          key={index}
          className={`bg-blue-200 p-1 mr-3 text-gray-600 text-sm border-round mb-1 border-left-2 border-orange-200 truncate`}
        >
          <a href="./" style={{ textDecoration: "none" }}>
            {evt.event_title}
          </a>
        </div>
      ))}
      {dayEvents.length > 2 && (
        <div className="text-sm text-blue-600">
          {dayEvents.length - 2} more...
        </div>
      )}
    </div>
  );
}
