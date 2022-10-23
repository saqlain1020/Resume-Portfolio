import { SET_THEME } from "./themeConstants";

export const setTheme = ({ color, lightColor }) => ({
  type: SET_THEME,
  payload: {
    color,
    lightColor,
  },
});
