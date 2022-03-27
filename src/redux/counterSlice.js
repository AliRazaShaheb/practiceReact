import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  value: 0
};

export const counterSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value === 0 ? 0 : state.value - 1;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;

export const CounterValue = () => {
  const count = useSelector((state) => state.mycounter.value);
  return count;
};
