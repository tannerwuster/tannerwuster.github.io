import React from "react";
import {
  HomePage,
  Row,
  SmallLeftColumn,
  SmallRightColumn,
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
            <SmallLeftColumn>
              <SectionTitle>
                <Header>Tanner Wuster</Header>
                <DarkParagraph>
                  A Little About Me. If anyone cares.
                </DarkParagraph>
                <DarkParagraph>
                  I’m a Computer Science Student at Colorado Mesa University and
                  have lived in Fruita, Colorado for most of my life. I enjoy
                  everything about technology, from the hardware all the way
                  down to the software, I’ve always appreciated how much
                  technology can transform someone’s life. I’m currently a
                  Software Engineer Intern at Kaart located in Grand Junction,
                  Colorado. While working here at Kaart, I’ve worked on numerous
                  projects that include: Go Kaart, our mobile IOS mapping
                  software developed to make it easier for our traveling staff
                  to map while on the go. I’ve also work on Mongoose, an image
                  viewing website built with React that will go public sometime
                  Summer 2021.
                </DarkParagraph>
                <DarkParagraph>
                  When I’m not behind my desk for hours coding or gaming, I also
                  enjoy the outdoors. I know, a Software Engineer likes going
                  outside, that’s almost unheard of. From hiking to skiing, I
                  really enjoyed growing up in such a beautiful place surrounded
                  by mountains and being able drive 45 minutes in any direction
                  and end up in either the dessert of Utah or the dense forest
                  of the Grand Mesa.
                </DarkParagraph>
              </SectionTitle>
            </SmallLeftColumn>
            <SmallRightColumn>
              <Picture src={tannerWU} alt="tannerWU" />
            </SmallRightColumn>
          </Row>
        </Container>
      </WhoAmI>
      <Hobbies>
        <Container>
          <Row>
            <SmallRightColumn>
              <SectionTitle>
                <LightHeading>10 Things About Me</LightHeading>
                <LightParagraph>
                  1. I enjoy reading and poetry, The Elder Statesman by T.S.
                  Eliot is one of my favorite poems and IT by Stephen King or
                  Invisible Man by Ralph Ellison are some of my favorite books.
                </LightParagraph>
                <LightParagraph>
                  2. Nepalese food from the local restaurant Gurus Kitchen has
                  some of the best food I’ve ever had.
                </LightParagraph>
                <LightParagraph>3. I have a puppy named Coco.</LightParagraph>
                <LightParagraph>
                  4. Going on 6 years with my girlfriend Paola.
                </LightParagraph>
                <LightParagraph>
                  5. Community, The Office, Breaking Bad, The Mandalorian, Game
                  of Thrones, and Silicon Valley are some my favorite TV shows.
                </LightParagraph>
                <LightParagraph>
                  6. I traveled to Chihuahua, Mexico in 2019 to meet my
                  girlfriend’s extended family.
                </LightParagraph>
                <LightParagraph>
                  7. I enjoy technology hardware design as much as I do
                  software.
                </LightParagraph>
                <LightParagraph>
                  8. Hiking is one of my favorite activities to do during the
                  spring, summer, and fall.
                </LightParagraph>
                <LightParagraph>
                  9. Some of my favorite podcast include The Vergecast,
                  Waveform, Decoder, The Lowe Post, and Pod Save America.
                </LightParagraph>
                <LightParagraph>
                  10. My favorite musical artists include Mac Miller, Mt. Joy,
                  J. Cole, Bas, and Cage the Elephant. I also enjoy Jazz and
                  classical when doing homework/studying.
                </LightParagraph>
              </SectionTitle>
            </SmallRightColumn>
          </Row>
        </Container>
      </Hobbies>
      {/* <ThingsILove>
        <Container>
          <Row>
            <SmallColumn>
              <SectionTitle>Things I Love</SectionTitle>
            </SmallColumn>
            <SmallColumn></SmallColumn>
          </Row>
        </Container>
      </ThingsILove> */}
    </HomePage>
  );
};
