import { Navigate, Outlet, useLocation } from "react-router-dom";
import ROUTES from "src/constants/routes";

export default function ProtectedRoute() {
  const isLoggedIn = true;
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate state={{ path: location.pathname }} to={ROUTES.login} />
  );
}
