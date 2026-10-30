// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth.js";
// import ROUTES from "./routespaths.js";

// const ProtectedRoute = () => {
//   const { isAuthenticated } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to={ROUTES.LOGIN} replace />;
//   }
  

//   return <Outlet />;
// };

// export default ProtectedRoute;

import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ROUTES from "./routespaths.js";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated
    ? <Outlet />
    : <Navigate to={ROUTES.LOGIN} replace />;
};

export default ProtectedRoute;