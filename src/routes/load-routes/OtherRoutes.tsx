import Loadable from "react-loadable";
import SpinnerLoader from "src/components/loaders/SpinnerLoader";

export const Home = Loadable({
  loader: () => import("src/pages/main/Home"),
  loading: () => <SpinnerLoader />,
});
