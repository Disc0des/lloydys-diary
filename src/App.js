import React from "react";
import "./styles/App.css";
import fadedink from "./images/faded-ink.webp";

function App() {
  return (
    <div className="app">
      <img src={fadedink} alt="faded ink logo" className="fadedink" />
      <h3 className="fadedlines">Faded Lines</h3>
    </div>
  );
}

export default App;
