import { takeLatest, all } from "redux-saga/effects";
import { handlePosts } from '../handlers/posts';



export default function* fetchPostsData() {
  yield takeLatest("SET_POSTS", handlePosts("SET_POSTS"));
}


