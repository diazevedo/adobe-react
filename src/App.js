import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import history from "./services/history";

export default function App() {
  function targetView() {
    var viewName = window.location.pathname || "home"; // or use window.location.pathName if router works on path and not hash

    // Sanitize viewName to get rid of any trailing symbols derived from URL
    if (viewName.startsWith("#") || viewName.startsWith("/")) {
      viewName = viewName.substr(1);
    }

    // Validate if the Target Libraries are available on your website
    if (
      typeof window.adobe != "undefined" &&
      window.adobe.target &&
      typeof window.adobe.target.triggerView === "function"
    ) {
      window.adobe.target.triggerView(viewName);
    }
  }

  history.listen(targetView);

  return (
    <Router history={history}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/delivery">Delivery</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/delivery">
            <Delivery />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

/** other components/pages */
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

/** once the user select a delivery option the triggerView is called
 *  find the trigger view at the bottom of the at.js file
 *
 *
 */
function Delivery() {
  function targetView(viewName) {
    // Validate if the Target Libraries are available on your website
    if (
      typeof adobe != "undefined" &&
      window.adobe.target &&
      typeof window.adobe.target.triggerView === "function"
    ) {
      window.adobe.target.triggerView(viewName);
    }
  }

  function onDeliveryPreferenceChanged(evt) {
    var selectedPreferenceValue = evt.target.value;
    targetView(selectedPreferenceValue);
  }

  return (
    <div onChange={onDeliveryPreferenceChanged}>
      <label>
        <input
          type="radio"
          id="normal"
          name="deliveryPreference"
          value={"Normal Delivery"}
          defaultChecked={true}
        />
        <span> Normal Delivery (7-10 business days)</span>
      </label>

      <label>
        <input
          type="radio"
          id="express"
          name="deliveryPreference"
          value={"Express Delivery"}
        />
        <span> Express Delivery* (2-3 business days)</span>
      </label>
    </div>
  );
}
