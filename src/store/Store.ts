import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, Reducer } from "redux";

import calendarReducer from "./reducers/LoginReducer";

const customizedMiddleware = {
  serializableCheck: false,
};

const allReducer: Reducer = combineReducers({
  calendarStore: calendarReducer,
});

// const persistedReducer = persistReducer(persistConfig, allReducer);

export const store = configureStore({
  reducer: allReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(customizedMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
