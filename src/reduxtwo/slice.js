import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0
};
const arzCounterSlice = createSlice({
  name: "arzCoutner",
  initialState,
  reducers: {
    increment: (state, action) => {
      return { ...state, counter: state.counter + 1 };
    },
    decrement: (state, action) => {
      return { ...state, counter: state.counter === 0 ? 0 : state.counter - 1 };
    }
  }
});

export const { increment, decrement } = arzCounterSlice.actions;

export default arzCounterSlice.reducer;
