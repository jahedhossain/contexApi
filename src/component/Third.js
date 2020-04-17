import React, { useContext } from "react";
import { UserContext } from "../App";

function Third() {
  const [state] = useContext(UserContext);
  return (
    <>
      <h1> Third component{state.count}</h1>
    </>
  );
}

export default Third;
