
import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, ALL_PRODUCT } from "../utils";
import { iProduct } from "../utils/type";


export default function productReducer(state: iProduct[] = [], action: any): iProduct[] {
  switch (action.type) {
    case ALL_PRODUCT:
      let newStateAll = action.body

      loger(state, newStateAll, action)

      return newStateAll;
    case ADD_PRODUCT:
      let newStateAdd = [...state, action.body];

      loger(state, newStateAdd, action)

      return newStateAdd;
    case DELETE_PRODUCT:
      let newStateDelete = state.filter(el => el.id !== action.body.id);

      loger(state, newStateDelete, action)

      return newStateDelete;
    case UPDATE_PRODUCT:
      let newStateUpdate = [...state.filter(el => el.id !== action.body.id), action.body];

      loger(state, newStateUpdate, action)

      return newStateUpdate;
    default:
      return state
  }
}

const loger = (state: iProduct[], newState: iProduct[], action: any) => {
  console.log("action")
  console.log("\t prev state", state);
  console.log("\t action", action);
  console.log("\t next state", newState);

}