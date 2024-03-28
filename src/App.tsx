import React from "react";
import Canvas from "./components/Canvas.tsx";
import Toolbar from "./components/Toolbar.tsx";

const App = () => {
  return (
    <div className="App">
      <Toolbar />
      <Canvas />
    </div>
  );
};

export default App;
