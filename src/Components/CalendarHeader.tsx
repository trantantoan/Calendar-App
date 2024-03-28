import dayjs from "dayjs";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setMonthIndex } from "../store/actions/ProductAction";

export default function CalendarHeader() {
  const dispatch = useAppDispatch();
  const monthIndex: number = useAppSelector(
    (state) => state.calendarStore.monthIndex
  );

  const months = [
    { name: "January", code: 0 },
    { name: "February", code: 1 },
    { name: "March", code: 2 },
    { name: "April", code: 3 },
    { name: "May", code: 4 },
    { name: "June", code: 5 },
    { name: "July", code: 6 },
    { name: "August", code: 7 },
    { name: "September", code: 8 },
    { name: "October", code: 9 },
    { name: "November", code: 10 },
    { name: "December", code: 11 },
  ];

  const handlePrevMonth = () => {
    dispatch(setMonthIndex(monthIndex - 1));
  };

  const handleNextMonth = () => {
    dispatch(setMonthIndex(monthIndex + 1));
  };

  const handleResetToday = () => {
    dispatch(
      setMonthIndex(
        monthIndex === dayjs().month()
          ? monthIndex + Math.random()
          : dayjs().month()
      )
    );
  };
  return (
    <>
      <header className="px-4 py-2 flex justify-content-between">
        <div className="flex align-items-center">
          <Button
            className="border-round py-2 px-4 m r-5 text-gray-900"
            label="Today"
            onClick={handleResetToday}
          />
          <button className="bg-white border-none" onClick={handlePrevMonth}>
            <span className="material-icons-outlined cursor-pointer text-blue-600 mx-2">
              chevron_left
            </span>
          </button>
          <button className="bg-white border-none" onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-blue-600 mx-2">
              chevron_right
            </span>
          </button>
          <h2 className="ml-4 text-xl font-bold text-gray-500">
            {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
          </h2>
        </div>
        <div className="card flex justify-content-center align-items-center">
          <Dropdown
            value={monthIndex}
            onChange={(e) => dispatch(setMonthIndex(e.value.code))}
            options={months}
            optionLabel="name"
            placeholder={months[monthIndex].name}
            className="w-full px-1 py-1  border-1 border-blue-400 border-round-2xl"
          />
        </div>
      </header>
    </>
  );
}
