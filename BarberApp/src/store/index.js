import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import ReactoTron from '../config/reactotron';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, 
  compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
console.log(store.getState(),"Store inicializada\n");
  export default store;