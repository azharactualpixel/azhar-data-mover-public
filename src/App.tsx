import ReduxProvider from "src/providers/ReduxProvider";
import MainRoutes from "src/routes/routes";

function App() {
  return (
    <ReduxProvider>
      <MainRoutes />
    </ReduxProvider>
  );
}

export default App;
