import { combineReducers } from "redux";
import productReducer from './reducer';
import productListReducer from './ProductReducer';

const rootReducer  = combineReducers({
    productReducer,productListReducer
    
})


export default rootReducer;