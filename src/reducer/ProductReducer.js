import { SET_LIST } from "../action/constent";


const productChange = (state=[],action)=>{

    switch(action.type){
        
      case SET_LIST : 
      return[...action.data]


        default : return state

    }

}

export default productChange;