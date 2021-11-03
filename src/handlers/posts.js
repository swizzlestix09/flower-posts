import { call, put } from 'redux-saga/effects';
import { getAllPosts } from '../request/request';
import { setPosts } from '../reducers/reducers';


export function* handleGetPost(action) {
  try {
    const response = yield call(getAllPosts, action);
    const { data } = response;
    yield put(setPosts(data));
  } catch (err) {
    console.log( 'Error w data, ', err);
  }
}