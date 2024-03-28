import { useEffect, useState } from "react";
import { Dayjs } from "dayjs";
import CalendarHeader from "./Components/CalendarHeader";
import Month from "./Components/Month";

import SideBar from "./Components/SideBar";
import { getMonth } from "./util/util";
import { useAppSelector } from "./hooks/reduxHooks";

function App() {
  const [currentMonth, setCurrentMonth] = useState<Dayjs[][]>(getMonth());
  const { monthIndex } = useAppSelector((state) => state.calendarStore);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      <div
        className="flex h-full px-7 py-1"
        style={{ backgroundColor: "#5684AE" }}
      >
        <div className="w-6">
          <SideBar />
        </div>
        <div
          className=" flex
        flex-column w-full bg-white"
        >
          <CalendarHeader />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}
export default App;
