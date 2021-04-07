import React from "react";
import {
  AboutMePage,
  Row,
  SmallColumn,
  Title,
  SectionTitle,
  WhoAmI,
  Hobbies,
  ThingsILove,
} from "./styles";
import "./styles.css";

export const AboutMe = () => {
  return (
    <AboutMePage>
      <WhoAmI>
        {/* <Row> */}
        <SmallColumn>
          <SectionTitle>
            <Title>Tanner A. Wuster</Title>
          </SectionTitle>
        </SmallColumn>
        {/* </Row> */}
      </WhoAmI>
      <Hobbies>
        {/* <Row> */}
        <SmallColumn>
          <SectionTitle>
            <Title>Hobbies</Title>
          </SectionTitle>
        </SmallColumn>
        {/* </Row> */}
      </Hobbies>
      <ThingsILove>
        {/* <Row> */}
        <SmallColumn>
          <SectionTitle>
            <Title>Things I Love</Title>
          </SectionTitle>
        </SmallColumn>
        {/* </Row> */}
      </ThingsILove>
    </AboutMePage>
  );
};
