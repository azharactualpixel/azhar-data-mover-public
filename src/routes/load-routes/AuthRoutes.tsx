import Loadable from "react-loadable";
import SpinnerLoader from "src/components/loaders/SpinnerLoader";

export const Login = Loadable({
  loader: () => import("src/pages/auth/Login"),
  loading: () => <SpinnerLoader />,
});
