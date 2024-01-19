/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks";

export default function GuardedRoute({ children, isProtected }) {
  const location = useLocation();
  const { user } = useAuth();

  if (isProtected && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
