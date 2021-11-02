export default function posts(state = [], action) {
  switch (action.type) {
    case "SET_POSTS":
      return state = [ ...action.data];
    default:
      return state;
  }
}
