import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../../../store";
import { SliceState } from "./interfaces";

const getCurrentState = (state: AppState) => state.counter;
export const selectCurrentCount = () =>
  createSelector([getCurrentState], (state: SliceState) => {
    return state.count;
  });
