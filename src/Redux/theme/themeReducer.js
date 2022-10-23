import { SET_THEME } from "./themeConstants";

const initialState = {
    color: "rgb(0,20,20)",
    lightColor: "#e1e7ed4a"
};

const themeReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_THEME:
      return { ...initialState, color: payload.color,lightColor:payload.lightColor };
    default:
      return state;
  }
};

export default themeReducer;
