import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getPosts} from './reducers/reducers'
import Form from "./Components/Form";
import Search from "./Components/Search";

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts())
  }, [dispatch]);

  const posts = useSelector((state) => state.posts);

  return (
    <div className="mainDivs">
      <Search />
      <Form />
      <h5>{posts ? posts.map(post => (
        <p>{post}</p>
      )) : <p>cannot compute</p>}</h5>
    </div>
  );
}

export default App;
