import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppThunk, AppState } from "../../store";

export const subjectSlice = createSlice({
  name: "subject",

  initialState: {} as any,

  reducers: {
    setEnt(state, action) {
      return action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});

export const fetchSubject =
  (id: any): AppThunk =>
  async (dispatch) => {
    const timeoutPromise = (timeout: number) =>
      new Promise((resolve) => setTimeout(resolve, timeout));

    await timeoutPromise(200);

    dispatch(
      subjectSlice.actions.setEnt({
        [id]: {
          id,
          name: `Subject ${id}`,
        },
      })
    );
  };

export const selectSubject = (id: any) => (state: AppState) =>
  state?.[subjectSlice.name]?.[id];
