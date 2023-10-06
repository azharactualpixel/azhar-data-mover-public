import SpinnerLoader from "components/loaders/SpinnerLoader";
import Loadable from "react-loadable";

export const Login = Loadable({
  loader: () => import("pages/auth/Login"),
  loading: () => <SpinnerLoader />,
});
