import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export function changeProductReducer(state=initialState.currentProduct, action) {
    switch (action) {
        case actionTypes.CHANGE_PRODUCTS:
            return action.payload
            break;
    
        default:
            return state;
            break;
    }
}