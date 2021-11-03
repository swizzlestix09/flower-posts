import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import postsReducer from "../reducers/reducers";
import handlePosts from "../sagas/sagas";


const reducer = combineReducers({
  postsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(handlePosts);

export default store;
