import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export function createProductReducer(
  state = initialState.savedProduct,
  action
) {
  switch (action.type) {
    case actionTypes.CREATE_NEW_PRODUCT:
      return action.payload;
      break;
    case actionTypes.UPDATE_NEW_PRODUCT:
      return action.payload;
      break;

    default:
        return state;
      break;
  }
}
