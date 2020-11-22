import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import {logger} from "redux-logger/src";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";
import {persistStore} from "redux-persist";
import rootSaga from "./root-saga";


const sagaMiddleware = createSagaMiddleware();

const middlewares = []
middlewares.push(logger);
middlewares.push(thunk);
middlewares.push(sagaMiddleware);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);


export default {store,persistStore};