import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Header>
        <Switch>
          <Route exact={true} path="/"></Route>
          <Route path="/src/components/AboutMe">
            <AboutMe />
          </Route>
          {/* <Route path="/src/components/secondcomponent">
            <AboutMe />
          </Route>
          <Route path="/src/components/thirdcomponent">
            <AboutMe />
          </Route> */}
          {/* <Footer /> THIS IS WHERE IS SHOULD BE SO IT SHOWS UP ON EVERY PAGE*/}
        </Switch>
      </Header>
      <Footer /> {/*TO WORK ON FOOTER INSERT HERE*/}
    </Router>
  );
}

export default App;
