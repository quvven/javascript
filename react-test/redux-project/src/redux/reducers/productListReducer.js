import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export function productListReducer(state=initialState.products, action) {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_SUCCESS:
            return action.payload;
            break;
    
        default:
            return state;
            break;
    }
}