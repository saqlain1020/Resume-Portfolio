import { SET_THEME } from "./themeConstants";

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: {
    theme,
  },
});
