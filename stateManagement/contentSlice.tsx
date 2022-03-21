import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  subTitle: "",
  imgSrc: "",
} as contentInitialState;

const contentSlice = createSlice({
  name: "pageContent",
  initialState,
  reducers: {
    setPageContent(state, action) {
      state = action.payload;
    },
  },
});

export const { setPageContent } = contentSlice.actions;
export default contentSlice.reducer;
