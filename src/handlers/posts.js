import { call, put } from 'redux-saga/effects';
import { getPosts } from '../request/request';

export function* handlePosts(action) {
  try {
    const response = yield call(getPosts)
    console.log('WHAT THE FUCK ', response)
    const posts = response.data;
    yield put({ type: action, payload: posts });
  } catch (err) {
    console.log( 'Error w data, ', err);
  }
}