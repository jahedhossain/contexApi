import React, { useContext } from "react";
import { UserContext } from "../App";

function Third() {
  const [count] = useContext(UserContext);
  return (
    <>
      <h1> Third component{count}</h1>
    </>
  );
}

export default Third;
