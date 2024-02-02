import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const PrivateRoute = () => {
  const { authUser } = useAuth();
  return <div>{authUser ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
