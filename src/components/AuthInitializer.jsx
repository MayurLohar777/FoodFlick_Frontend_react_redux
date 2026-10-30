import { useEffect } from "react";
import  useAuth  from "../hooks/useAuth";

const AuthInitializer = ({ children }) => {
  const { restoreUser } = useAuth();

  useEffect(() => {
    restoreUser();
  }, [restoreUser]);
 

  return children;
};

export default AuthInitializer;
