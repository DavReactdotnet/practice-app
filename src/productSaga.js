
import {takeEvery,put} from 'redux-saga/effects';
import { GET_LIST, SET_LIST } from './action/constent';

function*   getData (){

let data = yield fetch("http://localhost:3000/products")
data = yield data.json()
    console.log("get data saga",data);
    yield put({type:SET_LIST,data})
    
}

function* productSaga(){
yield takeEvery(GET_LIST,getData)
}

export default productSaga;