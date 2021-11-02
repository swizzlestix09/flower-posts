import React from 'react'

import "./App.css";

function App({ value, onIncrement, onDecrement, onIncrementAsync }) {
return (<div>
  <div>
    {value}
  </div>
</div>
)
};

export default App;
