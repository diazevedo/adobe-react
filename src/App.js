import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./services/history";
import Reset from "./styles/Reset";

function App() {
  return (
    <Router history={history}>
      <Routes />
      <Reset />
    </Router>
  );
}

export default App;
