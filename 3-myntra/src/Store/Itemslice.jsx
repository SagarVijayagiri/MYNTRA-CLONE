import { createSlice } from "@reduxjs/toolkit";
//import { DEFAULT_ITEMS } from "../data/items.js"
export const itemslice=createSlice({
  name: "items",
  initialState : [],
  reducers : {
    addinitialitems: (state,action)=>{
      return action.payload;
    }
  }
})
export const itemactions=itemslice.actions;
