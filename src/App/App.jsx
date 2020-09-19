import React from "react";
import Container from "components/atoms/Container";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="logo brand">VRA'S</div>
      </header>
    </Container>
  );
}

export default App;
