import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route exact={true} path="/"></Route> */}
        {/* <Route path="/src/components/home">
            <Home />
          </Route> */}
        <Route component={AboutMe}>
          <AboutMe />
        </Route>
        {/* <Route path="/src/components/Contact">
            <Contact />
          </Route> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
