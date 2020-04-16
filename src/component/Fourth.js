import React, { useContext } from "react";
import { UserContext } from "../App";

function Fourth() {
  const [count, setCount] = useContext(UserContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Fourth Component {count}</h1>
      <button onClick={handleClick}> Click Me</button>
    </>
  );
}

export default Fourth;
