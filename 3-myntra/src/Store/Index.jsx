import { configureStore } from "@reduxjs/toolkit";
import { itemslice } from "./Itemslice.jsx"
import { fetchstatusslice } from "./fetchslice.jsx"
import { bagslice } from "./Bagslice.jsx"
export const myntrastore=configureStore({
  reducer:{
    items:itemslice.reducer,
    fetchStatus:fetchstatusslice.reducer,
    bag:bagslice.reducer
  }
})