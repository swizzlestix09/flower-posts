export const SET_POSTS = 'SET_POSTS';
export const GET_POSTS = 'GET_POSTS';

export const setPosts = (payload) => ({
 type: SET_POSTS,
 payload
});

export const getPosts = () => ({
  type: GET_POSTS
 });

 const initialState = {
  posts: undefined
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return state = { ...state, posts: action.payload };
    default:
      return state;
    }
}
