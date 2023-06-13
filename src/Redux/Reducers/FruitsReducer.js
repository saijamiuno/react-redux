import { SELECTED_FRUIT } from "../Const";

const intialState = {
  fruits: [],
};

export default function FruitsReducer(state = intialState, actions) {
  console.log(actions, "actions");
  switch (actions.type) {
    case SELECTED_FRUIT:
      return {
        ...state,
        fruits: [...state.fruits, actions.payload],
      };

    default:
      return state;
  }
}
