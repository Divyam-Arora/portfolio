import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialScrollState = { scroll: 0, direction: 0 };

const scrollSlice = createSlice({
  name: "scroll",
  initialState: initialScrollState,
  reducers: {
    setScroll: (state, action) => {
      state.direction = state.scroll - action.payload < 0 ? 1 : -1;
      state.scroll = Math.floor(action.payload);
      // state.direction = action.payload.direction;
    },
  },
});

const store = configureStore({
  reducer: {
    scroll: scrollSlice.reducer,
  },
});

export const scrollActions = scrollSlice.actions;

export default store;
