import React from "react";
import Container from "components/atoms/Container";
import Navbar from "components/atoms/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <header className="App-header">
          <div className="logo brand">VRA'S</div>
        </header>
      </Container>
    </>
  );
}

export default App;
