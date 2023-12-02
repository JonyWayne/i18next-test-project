import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Functional from "./Components/Functional";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>TEST i18next</p>
        <Header />
        <Functional />
      </header>
    </div>
  );
}

export default App;
