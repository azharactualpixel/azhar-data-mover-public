import ReduxProvider from "providers/ReduxProvider";
import MainRoutes from "routes/routes";

function App() {
  return (
    <ReduxProvider>
      <MainRoutes />
    </ReduxProvider>
  );
}

export default App;
