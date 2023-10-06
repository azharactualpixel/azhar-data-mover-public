import ROUTES from "constants/routes";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import * as AuthLoadable from "routes/load-routes/AuthRoutes";
import * as OtherLoadable from "routes/load-routes/OtherRoutes";
import ProtectedRoute from "routes/permission-routes/ProtectedRoute";

function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<OtherLoadable.Home />} path={ROUTES.home} />
        </Route>
        <Route element={<AuthLoadable.Login />} path={ROUTES.login} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;
