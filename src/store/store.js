import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers/reducers";
import handlePosts from "../sagas/sagas";

const reducers = combineReducers({
  postReducer: reducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

sagaMiddleware.run(handlePosts);

export default store;
