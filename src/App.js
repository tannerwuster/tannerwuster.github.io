import "./App.css";
import React from "react";

import { SecondAboutMeSection } from "./components/SecondAboutMeSection";
import { ThirdSocialSection } from "./components/ThirdSocialSecetion";
import { FirstSplashSection } from "./components/FirstSplashSection";
import { SiteWrapper } from "./styles";

function App() {
  return (
    <SiteWrapper>
      <FirstSplashSection />
      <SecondAboutMeSection />
      <ThirdSocialSection />
    </SiteWrapper>
  );
}

export default App;
