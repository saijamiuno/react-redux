import { ADD_VALUE, REMOVE_TODO, SELECTED_FRUIT } from "../Const";

export function handleSubmit(value) {
  return {
    type: ADD_VALUE,
    payload: value,
  };
}

export function removeTodo(value) {
  return {
    type: REMOVE_TODO,
    payload: value,
  };
}

export function selectedObject(value) {
  return {
    type: SELECTED_FRUIT,
    payload: value,
  };
}