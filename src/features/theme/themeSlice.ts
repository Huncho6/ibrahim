import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setResolvedTheme: (state, action: PayloadAction<{ isDarkMode: boolean }>) => {
      state.isDarkMode = action.payload.isDarkMode;
    },
  },
});

export const { setResolvedTheme } = themeSlice.actions;
export default themeSlice.reducer;
