import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "./action/action";

function App() {
  const counter = useSelector((state) => state.counterReduce);
  const logged = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counting {counter}</h1>
      <button onClick={() => dispatch(increment(5))} > +</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {logged ? <h1>Loggin {logged}</h1> : "Not Logged IN"}
    </div>
  );
}

export default App;
