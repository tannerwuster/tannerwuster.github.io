import React from "react";
import {
  AppBar,
  Picture,
  AvitarBackground,
  Name,
  AboutMeDiv,
  AboutMeParagraph,
} from "./styles";
import aviatar from "../../images/aviatarphoto.jpg";

export const AboutMeSection = () => {
  return (
    <AppBar>
      <AvitarBackground>
        <Picture src={aviatar} alt="tannerWU" />
        <Name>TANNER A. WUSTER</Name>
      </AvitarBackground>
      <AboutMeDiv>
        <AboutMeParagraph>
          Tanner Wuster is a Software Engineer with a passion for all things
          tech. He’s worked with Swift, Javascript, Python, and C++ development.
          He enjoys going outside sometimes and hanging out with his dog, and many many cats.
        </AboutMeParagraph>
      </AboutMeDiv>
    </AppBar>
  );
};
