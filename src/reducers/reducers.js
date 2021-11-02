const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_POSTS":
      const posts = action.payload;
      return state = [posts];
    default:
      return state;
  }
}
