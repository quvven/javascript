import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";


export function categoryListReducer(state=initialState.categories, action) {
    switch (action.type) {
        case actionTypes.GET_CATEGORY_SUCCESS:
            return action.payload;
            break;
    
        default:
            return state;
            break;
    }
}