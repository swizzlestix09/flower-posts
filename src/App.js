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

  console.log('what is posts? ', posts);
  return (
    <div className="mainDivs">
      <Search />
      <Form />
      <div>{posts ? posts.map(post => (
        <p>{post}</p>
      )) : <p>cannot compute</p>}</div>
    </div>
  );
}

export default App;
