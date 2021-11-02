import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App({ value, onIncrement, onDecrement, onIncrementAsync }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "SET_POSTS" });
  }, [dispatch]);

  const posts = useSelector((state) => state.posts);
  console.log(posts)
  return (
      <div>
        <div>{value}</div>
      </div>
  );
}

export default App;
