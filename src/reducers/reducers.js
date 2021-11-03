const SET_POSTS = 'SET_POSTS';
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

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      console.log('in reducer ', action.payload)
      return state = { posts: action.payload };
    default:
      console.log('in reducer ', state)
      return state;
    }
}
