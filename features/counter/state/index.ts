import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceState } from "./interfaces";
import { HYDRATE } from "next-redux-wrapper";

const initialState: SliceState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state: SliceState, action) {
      console.log("increment by", action.payload);
      state.count += action.payload;
    },
    reset(state: SliceState) {
      state.count = 0;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE");
      console.log("hydrate state", state);
      console.log("hydrate payload", action.payload);
      return {
        ...state,
        ...action.payload.counter,
      };
    },
  },
});

export const { increment, reset } = counterSlice.actions;

export const reducer = counterSlice.reducer;

export default counterSlice;
