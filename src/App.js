import "./App.css";
import React from "react";

import { AboutMeSection } from "./sections/AboutMeSection";
import { SkillsSection } from "./sections/SkillsSecetion";
import { Header } from "./components/Header";
import { SiteWrapper } from "./styles";

function App() {
  return (
    <SiteWrapper>
      <Header />
      {/* <AboutMeSection />
      <SkillsSection /> */}
    </SiteWrapper>
  );
}

export default App;
