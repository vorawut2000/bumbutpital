import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./app/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./app/landing/Landing";
import Authen from "./app/auth/Authen";
import ManagePost from "./app/content/ManagePost";

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
            
            <Router>
              <Sidebar />
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/posts">
                <ManagePost />
              </Route>
            </Router>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
