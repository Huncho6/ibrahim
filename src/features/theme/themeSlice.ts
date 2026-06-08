import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;  // Toggling the theme
    },
    setTheme: (state, action) => {
      state.isDarkMode = action.payload;     // Explicitly setting the theme (true for dark, false for light)
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions; // Export setTheme action
export default themeSlice.reducer;
