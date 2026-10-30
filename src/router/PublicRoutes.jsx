// import React from "react";
// import { Navigate, Outlet} from "react-router-dom";
// import useAuth from "../hooks/useAuth.js";
// import ROUTES from "./routespaths.js";

// const PublicRoutes = () => {
//   const { isAuthenticated } = useAuth();
//   // const location = useLocation();

//   if (!isAuthenticated) {
//     // const from = location.state?.from?.pathname || ROUTES.HOME;
//     return <Navigate to={ROUTES.LOGIN} replace />;
//   }
  

//   return <Outlet />;
// };

// export default PublicRoutes;



import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import ROUTES from "./routespaths.js";

const PublicRoutes = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // Logged-in users should not see Login or Register.
  if (isAuthenticated) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  // Logged-out users can see Login and Register.
  return children ? children : <Outlet />;
};

export default PublicRoutes;

