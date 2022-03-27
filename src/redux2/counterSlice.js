import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  counter: 0
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return { ...state, counter: state.counter + 1 };
    },
    decrement: (state) => {
      return { ...state, counter: state.counter === 0 ? 0 : state.counter - 1 };
    },
    plusIncrement: (state, { payload }) => {
      return { ...state, counter: state.counter + payload };
    }
  }
});

export default counterSlice.reducer;

export const useRedux = () => {
  const { increment, decrement, plusIncrement } = counterSlice.actions;
  const selector = useSelector((state) => state.obj);
  const dispatch = useDispatch();
  return [selector, dispatch, increment, decrement, plusIncrement];
};
