import React from "react";
import '../src/App.css';
import Home from "../src/pages/Home";
import Result from "../src/pages/Result";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/result" render={(props) => <Result {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
