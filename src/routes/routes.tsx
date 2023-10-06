import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ROUTES from "src/constants/routes";
import * as AuthLoadable from "src/routes/load-routes/AuthRoutes";
import * as OtherLoadable from "src/routes/load-routes/OtherRoutes";
import ProtectedRoute from "src/routes/permission-routes/ProtectedRoute";

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
