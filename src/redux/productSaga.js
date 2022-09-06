import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';


function* getData(){
    let data = yield axios.get("http://localhost:3000/products").then((res)=>{
        return res.data
    })
    yield put({type:SET_PRODUCT_LIST,data})
    console.log(data)
}



function* serachProductApi(data){
    console.log("query me kya aa raha hai",data.query)
    let result = yield axios.get(`http://localhost:3000/products?q=${data.query}`)
    
    console.log("search wala data",result.data)
    yield put({type:SET_PRODUCT_LIST,data:result})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getData)
    yield takeEvery(SEARCH_PRODUCT, serachProductApi)

}
export default productSaga;