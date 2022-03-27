import { configureStore } from "@reduxjs/toolkit";
import arzCoutner from "./slice";

export const newStore = configureStore({
  reducer: {
    arz: arzCoutner
  }
});
