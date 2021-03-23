import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import themeReducer from "./theme/themeReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  whitelist: ["theme"],
  storage,
};

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default persistReducer(persistConfig, rootReducer);
