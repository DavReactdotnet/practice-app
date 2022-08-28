import { combineReducers } from "redux";
import ProductReducer from './ProductReducer';
import numberChange from './reducer';

const rootReducer = combineReducers({
    numberChange,ProductReducer,
})

export default rootReducer;