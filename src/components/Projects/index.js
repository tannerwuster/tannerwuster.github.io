import React from "react";
import {
  ProjectsPage,
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
} from "./styles";
import tannerWU from "../../images/tannerphoto.png";

export const Projects = () => {
  return (
    <ProjectsPage>
      <WhoAmI>
        <Container>
          <Row>
            <SmallColumn>
              <SectionTitle>
                <Header>Tanner A. Wuster</Header>
                <SubHeading>A little About Me</SubHeading>
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
    </ProjectsPage>
  );
};
