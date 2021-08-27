import React from "react";
import { Route, Redirect } from "react-router-dom";

import Wrapper from "../components/Wrapper";
import AuthWrapper from "../components/AuthWrapper";

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  const WrapperComp = signed ? AuthWrapper : Wrapper;

  return (
    <Route
      {...rest}
      render={(props) => (
        <WrapperComp>
          <Component {...props} />
        </WrapperComp>
      )}
    />
  );
};

export default RouteWrapper;
