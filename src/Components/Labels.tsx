import dayjs from "dayjs";
import { useAppSelector } from "../hooks/reduxHooks";
import { ISavedEvents } from "../model/savedEvents";

export default function Labels() {
  const { savedEvents } = useAppSelector((state) => state.calendarStore);

  return (
    <div className="flex flex-column w-full ">
      <div className="flex justify-content-between py-2">
        <div>
          <h1 className="text-5xl font-bold text-blue-800">Upcoming Events</h1>
          <p className="text-500 text-xl font-bold py-3">
            Today, {dayjs().format("D MMMM")}
          </p>
        </div>
        <div>
          <button className="text-bg-black-alpha-10 px-4 py-2 cursor-pointer bg-blue-700 text-white border-none border-round-2xl">
            View all
          </button>
        </div>
      </div>
      <div>
        {savedEvents.map((evt: ISavedEvents, index: number) => {
          return (
            <div
              key={index}
              className="flex align-items-center border-round-3xl p-3 mb-3"
              style={{
                backgroundColor: evt.is_client ? "#5584ae" : "#f8be80",
                borderLeftStyle: "solid",
                borderLeftWidth: "1rem",
                borderLeftColor: "#fd803e",
              }}
            >
              <div className="pr-4 text-white">
                {/* <h2>{evt.event_title}</h2> */}
                {evt.is_client ? (
                  <h2>{evt.event_title}</h2>
                ) : (
                  <h2>
                    <a
                      href="https://www.eventbrite.sg/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {evt.event_title}{" "}
                    </a>
                  </h2>
                )}
                <p>{evt.time}</p>
                <div className="flex w-7">
                  {evt.is_client && (
                    <>
                      <img src="/person.png" alt="" className="w-2 mx-3" />
                      <a href="">View Client Proile</a>
                    </>
                  )}
                </div>
              </div>
              <div className="pl-2">
                {evt.session_type === "Video" && (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/68/Video_camera_icon.svg"
                    className="flex text-center border-circle p-3 d-flex justify-content-center align-items-center"
                    style={{ height: "3.5rem", backgroundColor: "#FFE4C8" }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
