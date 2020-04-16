import React, { useContext } from "react";
import { UserContext } from "../App";

function First() {
  const [count] = useContext(UserContext);
  return (
    <div>
      <h1> First component {count}</h1>
    </div>
  );
}

export default First;
