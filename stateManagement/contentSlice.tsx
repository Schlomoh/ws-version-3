import { createSlice } from "@reduxjs/toolkit";
import background from "../assets/img/background.jpg";

const initialState = {
  title: "",
  subTitle: "",
  image: background,
  link: "",
} as IPageTitleContent;

const contentSlice = createSlice({
  name: "pageContent",
  initialState,
  reducers: {
    setPageContent(state, action) {
      state.title = action.payload.title;
      state.subTitle = action.payload.subTitle;
      state.image = action.payload.image;
      state.link = action.payload.link;
      state.githubSource = action.payload.githubSource;
    },
  },
});

export const { setPageContent } = contentSlice.actions;
export default contentSlice.reducer;
