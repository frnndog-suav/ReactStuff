import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = false;

  if (isAuthenticated) return children;

  return <Navigate to="/" />;
};
