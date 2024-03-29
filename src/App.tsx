import "./App.css";
import { Canvas } from "./components/Canvas";
import { Toolbar } from "./components/Toolbar";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Canvas />
    </div>
  );
}

export default App;
