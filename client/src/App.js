import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getAPI } from "./service";

function App() {
  const [ApiState, setApiState] = useState();

  useEffect(() => {
    getAPI().then((result) => {
      setApiState(result);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <p>{ApiState}</p>
    </div>
  );
}

export default App;
