import { configureStore } from "@reduxjs/toolkit";
import ArzCounter from "./counterSlice";
export const newStore2 = configureStore({
  reducer: {
    obj: ArzCounter
  }
});
