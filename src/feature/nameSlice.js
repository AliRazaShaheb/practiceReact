import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showName: false
};

const nameSlice = createSlice({
  name: "nameSlice",
  initialState,
  reducers: {
    setShowName: (state) => {
      state.showName = !state.showName;
    }
  }
});

export const { setShowName } = nameSlice.actions;

export default nameSlice.reducer;
