import React, { createContext, useReducer } from "react";
import "./App.css";
import First from "./component/First";
import Fourth from "./component/Fourth";
import Third from "./component/Third";

// TODO: Context api create
export const UserContext = createContext();
const initialState = { count: 0, age: 2134 };

// TODO: reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function App() {
  // TODO: useReducer create
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      <div className="App">
        <First />
        <Third />
        <Fourth />
      </div>
    </UserContext.Provider>
  );
}

export default App;
