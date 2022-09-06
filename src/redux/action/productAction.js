import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "../constant"


export const productList =()=>{
    return{
        type:PRODUCT_LIST
    }
}

export const setProductList =(data)=>{
    console.log("yes i am callling.....")
    return{
        type:SET_PRODUCT_LIST,
        data
    }
}

export const searchProduct =(query)=>{
    return{
        type:SEARCH_PRODUCT,
        query,
        
    }
}