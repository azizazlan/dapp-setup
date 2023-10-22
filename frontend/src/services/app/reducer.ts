/* eslint-disable no-console */
import { createSlice } from "@reduxjs/toolkit";
import { SubmissionStates } from "../submissionState";
import initialize from "./thunks/initialize";
import increase from "./thunks/increase";

interface AppState {
  submissionState: SubmissionStates;
  submissionMsg: string | null;
  currentCount: number;
}

const initialState: AppState = {
  submissionState: "IDLE",
  submissionMsg: null,
  currentCount: 0,
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(initialize.pending, (state, {}) => {
      state.currentCount = 0;
      state.submissionState = "PENDING";
    });
    builder.addCase(initialize.fulfilled, (state, { payload }) => {
      state.currentCount = payload.currentCount;
      state.submissionState = "OK";
    });
    builder.addCase(increase.pending, (state, {}) => {
      state.currentCount = 0;
      state.submissionState = "PENDING";
    });
    builder.addCase(increase.rejected, (state, action) => {
      console.log(action);
      state.submissionState = "FAILED";
    });
    builder.addCase(increase.fulfilled, (state, { payload }) => {
      state.currentCount = payload.currentCount;
      state.submissionState = "OK";
    });
  },
});

export const { reset } = appSlice.actions;
export default appSlice.reducer;
