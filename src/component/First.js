import React, { useContext } from "react";
import { UserContext } from "../App";

function First() {
  const [state] = useContext(UserContext);

  return (
    <div>
      <h1> First component {state.count}</h1>
    </div>
  );
}

export default First;
