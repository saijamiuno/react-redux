import { legacy_createStore as createStore, combineReducers } from "redux";
import TodoReducer from "./Reducers/TodoReducer";
import FruitsReducer from "./Reducers/FruitsReducer";
import PersistReducer from "./Reducers/PersistReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const rootReducer = combineReducers({
  todos: TodoReducer,
  friuts: FruitsReducer,
  persistFriuts: PersistReducer,
});

const persisConfig = {
  key: "root",
  storage,
  whitelist: ["persistFriuts"],
};

const persistedReducer = persistReducer(persisConfig, rootReducer);

export const Store = createStore(persistedReducer);
export const persistor = persistStore(Store);
