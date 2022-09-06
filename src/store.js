import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducer/rootReducer";
import productSaga from './redux/productSaga';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware()
const store = configureStore(
    {
        reducer:rootReducer,
        middleware:()=>[sagaMiddleware]
    }
    )
sagaMiddleware.run(productSaga)
export default store;