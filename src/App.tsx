import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./app/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./app/landing/Landing";
import Authen from "./app/auth/Authen";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/auth">
              <Authen />
            </Route>
            <Route exact path="/home">
              <Sidebar />
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
