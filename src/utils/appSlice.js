import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isDarkTheme: localStorage.getItem("theme"),
  },

  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    toggelTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      localStorage.setItem("theme", state.isDarkTheme);
    },
    initializeTheme: (state) => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme !== null) {
        state.isDarkTheme = JSON.parse(storedTheme); // Parse the stored value back to boolean
      }
    },
  },
});
export const { toggleMenu, closeMenu, toggelTheme, initializeTheme } =
  appSlice.actions;

export default appSlice.reducer;
