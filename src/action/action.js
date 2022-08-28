import {INCREMENT,DECREMENT} from './constent';
export const increment = ()=>{
    return{
        type:INCREMENT
    }

}


export const decrement = ()=>{
    return{
        type:DECREMENT
    }

}