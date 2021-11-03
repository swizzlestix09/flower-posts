import { takeLatest } from "redux-saga/effects";
import { handleGetPost } from '../handlers/posts';
import { GET_POSTS } from '../reducers/reducers';


export default function* handlePosts() {
  yield takeLatest(GET_POSTS, handleGetPost);
}


