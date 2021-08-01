import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
  ThunkAction,
} from "@reduxjs/toolkit";
import { Action, combineReducers, createStore } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { reducer as counterReducer } from "./features/counter/state";
import { subjectSlice } from "./features/subject";
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";

const combinedReducer = combineReducers({
  counter: counterReducer,
  [subjectSlice.name]: subjectSlice.reducer,
});

// const makeStore = () =>
//   configureStore({
//     reducer: combinedReducer,
//     devTools: true,
//   });

const makeStore = wrapMakeStore(() =>
  configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(
        nextReduxCookieMiddleware({
          subtrees: ["counter.count"],
        })
      ),
    devTools: true,
  })
);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
