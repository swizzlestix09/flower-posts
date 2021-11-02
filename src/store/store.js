import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/reducers'
import fetchPostsData from '../sagas/sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchPostsData);

//const action = type => store.dispatch({type})

export {store};