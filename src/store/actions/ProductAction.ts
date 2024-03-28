import { Dayjs } from "dayjs";
import { AppDispatch } from "../Store";

export const setMonthIndex = (monthIndex: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "SET_MONTH_INDEX",
        payload: monthIndex,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setCalendarMonth = (month: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "SET_SMALL_CALENDAR_MONTH",
        payload: month,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setDaySelected = (day: Dayjs) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: "SET_DAY_SELECTED",
        payload: day,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllEvents = () => {
  return async (dispatch: AppDispatch) => {
    const data = await fetch("/data.json")
      .then((res) => res.json())
      .then((data) => data);
    try {
      if (data) {
        dispatch({
          type: "GET_EVENT",
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
