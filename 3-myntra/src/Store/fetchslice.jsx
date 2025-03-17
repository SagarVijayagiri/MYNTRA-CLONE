import { createSlice } from "@reduxjs/toolkit";
export const fetchstatusslice = createSlice({
  name: "fetchstatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markfetchdone: (state) => {
      state.fetchDone = true;
    },
    markfetchingstarted: (state) => {
      state.currentlyFetching = true;
    },
    markfetchingfinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchstatusactions = fetchstatusslice.actions;
