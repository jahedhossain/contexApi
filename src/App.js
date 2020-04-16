import React, { createContext, useState } from "react";
import "./App.css";
import First from "./component/First";
import Fourth from "./component/Fourth";
import Third from "./component/Third";

// TODO:
export const UserContext = createContext();

function App() {
  const [count, setCount] = useState(1);

  return (
    <UserContext.Provider value={[count, setCount]}>
      <div className="App">
        <First />
        <Third />
        <Fourth />
      </div>
    </UserContext.Provider>
  );
}

export default App;
