import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'


export function changeCartReducer(state=initialState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            var addedItem = state.find(c=>c.product.id===action.payload.product.id);
            if(addedItem) {
                var newState = state.map(item=>{
                    if(item.product.id===action.payload.product.id) {
                        return Object.assign({}, addedItem, {quantity:addedItem.quantity+1})
                    }
                    return item;
                });
                return newState;
            } else {
                return [...state, {...action.payload}]
            }
            break;
        
        case actionTypes.REMOVE_FROM_CART:
            var newState = state.filter(item=>item.product.id!==action.payload.product.id)
            return newState;
            break;
    
        default:
            return state;
            break;
    }
}