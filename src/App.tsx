import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./app/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./app/landing/Landing";
import Authen from "./app/auth/Authen";
import ManagePost from "./app/management/Post";
import ManageVideo from "./app/management/Video";
import ManageUser from "./app/management/User";
import ManagePromotion from "./app/management/Promotion";

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
              <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/posts">
                <ManagePost />
              </Route>
              <Route path="/videos">
                <ManageVideo />
              </Route>
              <Route path="/users">
                <ManageUser />
              </Route>
              <Route path="/promotions">
                <ManagePromotion />
              </Route>
            </Router>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
