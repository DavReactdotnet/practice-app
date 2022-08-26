import { combineReducers } from 'redux';
import changeNumber from './reducer';



const rootReducer = combineReducers({
    changeNumber,
})

export default rootReducer;