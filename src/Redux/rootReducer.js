import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import themeReducer from "./theme/themeReducer";
import storage from "redux-persist/lib/storage";
import menuReducer from "./menu/menuReducer";

const persistConfig = {
  key: "root",
  whitelist: ["theme"],
  storage,
};

const rootReducer = combineReducers({
  theme: themeReducer,
  menu: menuReducer,
});

export default persistReducer(persistConfig, rootReducer);
