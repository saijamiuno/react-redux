import { legacy_createStore as createStore} from 'redux'
import TodoReducer from "./Reducers/TodoReducer";

const Store = createStore(TodoReducer)

export default Store;


