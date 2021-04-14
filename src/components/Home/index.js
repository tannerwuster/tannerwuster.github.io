import React from "react";
import {
  HomePage,
  Row,
  SmallColumn,
  Header,
  SectionTitle,
  SubHeading,
  WhoAmI,
  Hobbies,
  ThingsILove,
  Container,
  Picture,
  Paragraph,
  LightHeading,
  LightSubHeading,
  LightParagraph,
  DarkParagraph,
} from "./styles";
import tannerWU from "../../images/tannerphoto.png";

export const Home = () => {
  return (
    <HomePage>
      <WhoAmI>
        <Container>
          <Row>
            <SmallColumn>
              <SectionTitle>
                <Header>Hi! I'm Tanner Wuster</Header>
                <DarkParagraph>I’m a User Experience Designer specializing in tailored, artisanal, grass fed, and slow roasted apps and website for all different clients and purposes. Currently a Software Engineer Intern at Kaart located in Grand Junction, Colorado.</DarkParagraph>
                <SubHeading>A Little More About Me. If anyone cares.</SubHeading>
                <DarkParagraph></DarkParagraph>
              </SectionTitle>
            </SmallColumn>
            <SmallColumn>
              <Picture src={tannerWU} alt="tannerWU" />
            </SmallColumn>
          </Row>
        </Container>
      </WhoAmI>
      <Hobbies>
        <Container>
          <Row>
            <SmallColumn>
              <SectionTitle>
                <LightHeading>Hobbies</LightHeading>
                <LightParagraph>
                  Pepperoni is a blueprint for building cross-platform mobile
                  experiences rapidly with ready-to-use integrated building
                  blocks for common mobile app features.
                </LightParagraph>
              </SectionTitle>
            </SmallColumn>
            <SmallColumn></SmallColumn>
          </Row>
        </Container>
      </Hobbies>
      <ThingsILove>
        <Container>
          <Row>
            <SmallColumn>
              <SectionTitle>Things I Love</SectionTitle>
            </SmallColumn>
            <SmallColumn></SmallColumn>
          </Row>
        </Container>
      </ThingsILove>
    </HomePage>
  );
};
