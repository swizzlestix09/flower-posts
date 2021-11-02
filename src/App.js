import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

function App({ value, onIncrement, onDecrement, onIncrementAsync }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "SET_POSTS" });
  }, [dispatch]);

  return (
      <div>
        <div>{value}</div>
      </div>
  );
}

export default App;
