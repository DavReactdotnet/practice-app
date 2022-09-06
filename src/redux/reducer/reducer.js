import { ADD_PRODUCT, REMOVE_PRODUCT } from "../constant"


const initialState = 0
const productReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_PRODUCT: return state + 1
        case REMOVE_PRODUCT: return state-1
        default: return state
    }

}

export default productReducer;