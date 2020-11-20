import {createStore,applyMiddleware} from 'redux'
import {logger} from "redux-logger/src";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";


const middlewares = []
middlewares.push(logger);
middlewares.push(thunk);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));


export default {store};