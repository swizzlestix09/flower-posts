import "./App.css";
import React from "react";
import Form from "./Components/Form";
import Search from "./Components/Search";

function App({ value }) {

  return (
    <div>
      <div>{value}</div>
      <Search />
      <Form />
    </div>
  );
}

export default App;
