import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import counter from '../reducers/reducers'
import rootSaga from '../sagas/sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(counter, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({type})

export {store, action};