import { ADD_PRODUCT, REMOVE_PRODUCT } from "../constant"


export const addProduct = ()=>{
    return{
        type:ADD_PRODUCT
    }
}

export const removeProduct = ()=>{
    return{
        type:REMOVE_PRODUCT
    }
}