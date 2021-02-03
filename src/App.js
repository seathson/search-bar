import React from "react";
import "./App.css";
import Snow from "./components/snow/Snow";
import Router from "./router/Router";

function App() {
  return (
    <div className="wrapper">
      <Router />
      <Snow />
    </div>
  );
}

export default App;
