const initialState = false;

const menuReducer = (state = initialState, action) => {
  let { type } = action;
  switch (type) {
    case "OPEN":
      return true;
    case "CLOSE":
      return false;
    default:
      return state;
  }
};

export default menuReducer;

export const openMenu = () => ({
  type: "OPEN",
});

export const closeMenu = () => ({
  type: "CLOSE",
});
