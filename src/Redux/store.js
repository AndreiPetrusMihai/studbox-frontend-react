import {createStore,applyMiddleware} from 'redux'
import {logger} from "redux-logger/src";
import rootReducer from "./root-reducer";



const middlewares = []
middlewares.push(logger);


export const store = createStore(rootReducer, applyMiddleware(...middlewares));


export default {store};