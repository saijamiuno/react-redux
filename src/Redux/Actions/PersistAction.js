import { SELECTED_FRUIT_PERSIST } from "../Const";

export function selectedFruitNames(value) {
  return {
    type: SELECTED_FRUIT_PERSIST,
    payload: value,
  };
}
