import React from "react";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({authenticated, component: Component}) => {
  return (
    authenticated ? Component : <Navigate to="/login"/> // 뒤로가기 이슈 있음
  );
}

export default PrivateRoute;