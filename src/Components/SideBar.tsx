import Labels from "./Labels";
import SmallCalendar from "./SmallCalendar";

export default function sideBar() {
  return (
    <aside className="mr-4 px-3 bg-white">
      <SmallCalendar />
      <Labels />
    </aside>
  );
}
