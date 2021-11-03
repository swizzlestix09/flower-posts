import { takeLatest } from "redux-saga/effects";
import { handleGetPost } from '../handlers/posts';
import { SET_POSTS } from '../reducers/reducers';


export default function* handlePosts() {
  yield takeLatest(SET_POSTS, handleGetPost);
}


