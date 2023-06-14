import { legacy_createStore as createStore, combineReducers } from "redux";
import TodoReducer from "./Reducers/TodoReducer";
import FruitsReducer from "./Reducers/FruitsReducer";
import PersistReducer from "./Reducers/PersistReducer";
const rootReducer = combineReducers({
  todos: TodoReducer,
  friuts: FruitsReducer,
  persistFriuts: PersistReducer,
});

const store = createStore(rootReducer);

export default store;
