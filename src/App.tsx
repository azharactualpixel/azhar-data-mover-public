import "./App.css";
import Home from "./pages/Home";

function App() {
  const obj = { title: "helo" };
  return (
    <div className="App">
      <Home {...obj} />
    </div>
  );
}

export default App;
