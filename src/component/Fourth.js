import React, { useContext } from "react";
import { UserContext } from "../App";

function Fourth() {
  const [state, dispatch] = useContext(UserContext);

  const handleClick = () => {
    dispatch({ type: "increment" });
  };
  return (
    <>
      <h1>Fourth Component {state.count}</h1>
      <button onClick={handleClick}> Click Me</button>
    </>
  );
}

export default Fourth;
