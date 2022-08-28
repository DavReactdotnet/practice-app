// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/rootReducer";
import productSaga from './productSaga';
import createSagaMiddleware  from 'redux-saga';


const sagaMiddelWare = createSagaMiddleware()
const store =  configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddelWare]

})
sagaMiddelWare.run(productSaga)
export default store;