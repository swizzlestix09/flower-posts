import { takeLatest, all } from "redux-saga/effects";
import { handlePosts } from '../handlers/posts'

//const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* helloSaga() {
  console.log("Hello Sagas!");
}


function* fetchPostsData() {

  yield takeLatest("SET_POSTS", handlePosts);
}
console.log( 'in SAGASSSS ', fetchPostsData)
function* latestData() {
  yield takeLatest("FETCH_POSTS", fetchPostsData);
}
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), fetchPostsData(), latestData()]);
}
