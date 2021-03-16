
import productReducer from "./products";
import { combineReducers } from "redux";
import { reducer as formRedux } from "redux-form";


const allReduser = combineReducers({
  productes: productReducer,
  form: formRedux
})

export default allReduser;