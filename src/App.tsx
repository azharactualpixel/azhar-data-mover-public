import "./App.css";
import Home from "./pages/Home";

function App() {
  // eslint-disable-next-line no-console
  const isBoolean = true;
  if (isBoolean) console.log("erro");

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
