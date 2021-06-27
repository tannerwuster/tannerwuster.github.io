import "./App.css";
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { SecondAboutMeSection } from "./components/SecondAboutMeSection";
import { FourthContactSection } from "./components/FourthContactSection";
import { ThirdWorkSection } from "./components/ThirdWorkSection";
import { FirstSplashSection } from "./components/FirstSplashSection";
// import { Footer } from "./components/Footer";
import {
  SiteWrapper
} from "./styles";

function App() {
  return (
    <SiteWrapper>
    <Router>
      <FirstSplashSection />
      <Switch>
        <Route component={SecondAboutMeSection}>
          <SecondAboutMeSection />
        </Route>
        {/* <Route component={ThirdWorkSection}>
          <ThirdWorkSection />
        </Route>
        <Route component={FourthContactSection}>
          <FourthContactSection />
        </Route> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
    </SiteWrapper>
  );
}

export default App;