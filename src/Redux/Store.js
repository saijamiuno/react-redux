import { legacy_createStore as createStore, combineReducers } from "redux";
import TodoReducer from "./Reducers/TodoReducer";
import FruitsReducer from "./Reducers/FruitsReducer";
const rootReducer = combineReducers({
  todos: TodoReducer,
  friuts: FruitsReducer,
});

const store = createStore(rootReducer);

export default store;
