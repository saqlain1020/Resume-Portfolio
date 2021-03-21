import { SET_THEME } from "./themeConstants";

const initialState = {
    color: "rgb(0,20,20)"
};

const themeReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_THEME:
      return { ...initialState, color: payload.theme };
    default:
      return state;
  }
};

export default themeReducer;
