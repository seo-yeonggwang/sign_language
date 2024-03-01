import React from "react";
import {Navigate} from "react-router-dom";

const RestrictedRoutes = ({authenticated, component, redirectPath}) => {
  return (
    authenticated ? component : <Navigate to={redirectPath}/> 
  );
}

export default RestrictedRoutes;