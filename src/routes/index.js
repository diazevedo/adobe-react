import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Public from "../pages/Public";
import Private from "../pages/Private";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Public} />
      <Route path="/private" component={Private} isPrivate />
    </Switch>
  );
}
