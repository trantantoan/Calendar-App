import dayjs, { Dayjs } from "dayjs";

interface InitStateType {
  monthIndex: number;
  smallCalendarMonth: null;
  daySelected: Dayjs;
  showEventModal: false;
  selectedEvent: null;
  labels: [];
  savedEvents: Event[];
  filteredEvents: [];
}

interface ActionType {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

const initState: InitStateType = {
  monthIndex: dayjs().month(),
  smallCalendarMonth: null,
  daySelected: dayjs(),
  showEventModal: false,
  selectedEvent: null,
  labels: [],
  savedEvents: [],
  filteredEvents: [],
};

// function initEvents() {
//   const storageEvents = localStorage.getItem("savedEvents");
//   const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
//   return parsedEvents;
// }

const calendarReducer = (state = initState, { type, payload }: ActionType) => {
  switch (type) {
    case "SET_MONTH_INDEX":
      return { ...state, monthIndex: payload };
    case "SET_SMALL_CALENDAR_MONTH":
      return { ...state, smallCalendarMonth: payload };
    case "SET_DAY_SELECTED":
      return { ...state, daySelected: payload };
    case "SET_SHOW_EVENT_MODAL":
      return { ...state, showEventModal: payload };
    case "SET_SELECTED_EVENT":
      return { ...state, selectedEvent: payload };
    case "SET_LABELS":
      return { ...state, labels: payload };
    // case 'UPDATE_LABEL':
    //   return { ...state, labels: state.labels.map(lbl => lbl.label === payload.label ? payload : lbl) };
    case "GET_EVENT":
      return { ...state, savedEvents: payload };
    // case 'UPDATE_SAVED_EVENT':
    //   return { ...state, savedEvents: state.savedEvents.map(evt => evt.id === payload.id ? payload : evt) };
    // case 'DELETE_SAVED_EVENT':
    //   return { ...state, savedEvents: state.savedEvents.filter(evt => evt.id !== payload.id) };
    default:
      return state;
  }
};

export default calendarReducer;
