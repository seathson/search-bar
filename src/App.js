import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Snow from "./components/snow/Snow";
import Router from "./router/Router";

function App() {
  const state = useSelector(state => state.effect.snow)

  return (
    <div className="wrapper">
      <Router />
      {state ? <Snow /> : ''}
    </div>
  );
}

export default App;
