import React from "react";
import { AboutMePage, Row, SmallColumn, Title, SectionTitle } from "./styles";
import "./styles.css";

export const AboutMe = () => {
  return (
    <AboutMePage>
      <Row>
        <SmallColumn>
          <SectionTitle>
            <Title>Hobbies</Title>
          </SectionTitle>
        </SmallColumn>
      </Row>
    </AboutMePage>
  );
};
