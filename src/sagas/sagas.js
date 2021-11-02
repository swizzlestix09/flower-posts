import { put, takeEvery, takeLatest, all } from "redux-saga/effects";
import axios from 'axios';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* helloSaga() {
  console.log("Hello Sagas!");
}

function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

function* fetchPostsData() {
  const postsData = yield axios.get("http://jsonplaceholder.typicode.com/posts")
    .then(res => console.log('in promise ', res.data))
    .catch(err => console.log(err));

  yield put({ type: "FETCH_POSTS_SUCCESS", payload: postsData });
}

function* latestData() {
  yield takeLatest("FETCH_POSTS", fetchPostsData);
}
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), fetchPostsData(), latestData()]);
}
