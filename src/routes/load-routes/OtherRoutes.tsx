import SpinnerLoader from "components/loaders/SpinnerLoader";
import Loadable from "react-loadable";

export const Home = Loadable({
  loader: () => import("src/pages/main/Home"),
  loading: () => <SpinnerLoader />,
});
