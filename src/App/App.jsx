import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import Category from "./Category";
import Navbar from "components/atoms/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/category" component={Category} />
          <Route path="/detail" component={Detail} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
