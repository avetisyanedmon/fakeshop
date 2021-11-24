import { createStore, applyMiddleware } from 'redux';
import { productReducer } from './productReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../saga/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware()

 const store = createStore(
    productReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ),
    );
sagaMiddleware.run(rootSaga)

export default store;
