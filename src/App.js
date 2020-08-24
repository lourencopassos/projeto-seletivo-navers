import React from "react";
import "./App.css";
import Login from "../src/screens/login/index";
import Dashboard from "../src/screens/Dashboard"
import GlobalStyle from "./globalStyle";
import Router from "./screens/Router"


function App() {
  return (
    <div>
      <Router/>
      <GlobalStyle />
    </div>
  );
}

export default App;
