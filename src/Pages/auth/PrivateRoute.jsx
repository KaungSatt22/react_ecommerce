import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useUserAuth } from "../../hooks/useUserAuth";

const PrivateRoute = () => {
  let user = useUserAuth();
  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
