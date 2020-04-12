import { combineReducers } from "redux";
import { changeCategoryReducers } from "./changeCategoryReducers";
import { categoryListReducer } from "./categoryListReducer";
import { changeProductReducer } from './changeProductReducer';
import { productListReducer } from "./productListReducer";
import { changeCartReducer } from "./changeCartReducer";
import { createProductReducer } from "./createProductReducer";


const rootReducer = combineReducers({
    changeCategoryReducers,
    categoryListReducer,
    changeProductReducer,
    productListReducer,
    changeCartReducer,
    createProductReducer
})

export default rootReducer
