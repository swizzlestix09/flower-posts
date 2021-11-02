import { call, put } from 'redux-saga/effects';
import { getPosts } from '../request/request';

export function* handlePosts(action) {
  try {
    const response = yield call(getPosts);
    const posts = response.data;
    console.log( 'in handleposts, ', posts)
    yield put({ type: 'SET_POSTS', payload: posts });
  } catch (err) {
    yield put({ type: 'POSTS_FAILURE', message: err.message });
  }
}