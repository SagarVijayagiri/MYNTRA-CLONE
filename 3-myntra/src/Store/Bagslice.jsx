import { createSlice } from "@reduxjs/toolkit";
//import { DEFAULT_ITEMS } from "../data/items.js"
export const bagslice=createSlice({
  name: "bag",
  initialState : [],
  reducers : {
    addtobag: (state,action)=>{
      state.push(action.payload);
    },
    removefrombag: (state,action)=>{
      return state.filter(itemid=>itemid!==action.payload);
    }
  }
})
export const bagactions=bagslice.actions;
