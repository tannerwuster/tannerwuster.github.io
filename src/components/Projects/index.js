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
import gokaart from "../../images/gokaart.jpg";

export const Projects = () => {
  return (
    <HomePage>
      <WhoAmI>
        <Container>
          <Row>
            <SmallLeftColumn>
              <SectionTitle>
                <Header>Go Kaart!!!</Header>
                <DarkParagraph>
                  Go Kaart!! lets you create and edit information in
                  OpenStreetMap, the free crowd-sourced map of your neighborhood
                  and the world. Add shops and restaurants, streets, cycling and
                  hiking paths, buildings, lakes and rivers.
                </DarkParagraph>
                <DarkParagraph>• Quickly add points of interest</DarkParagraph>
                <DarkParagraph>• Edit nodes, ways and areas</DarkParagraph>
                <DarkParagraph>• Track your location and heading</DarkParagraph>
                <DarkParagraph>• Create and resolve Notes</DarkParagraph>
                <DarkParagraph>• Supports arbitrary tag values</DarkParagraph>
                <DarkParagraph>• Full undo/redo support</DarkParagraph>
                <DarkParagraph>
                  • Work offline and upload your changes later
                </DarkParagraph>
                <DarkParagraph>
                  • Bing, Mapbox and Mapnik backgrounds, or customize with your
                  own
                </DarkParagraph>
                <DarkParagraph>
                  • See who last edited an object and when
                </DarkParagraph>
                <DarkParagraph>• Find other mappers nearby</DarkParagraph>
                <DarkParagraph>
                  • Search for places using Nominatim
                </DarkParagraph>
                <DarkParagraph>
                  • Free! No ads or in-app purchases
                </DarkParagraph>
                <DarkParagraph>
                  For more information visit www.OpenStreetMap.org
                </DarkParagraph>
              </SectionTitle>
            </SmallLeftColumn>
            <SmallRightColumn>
              <Picture src={gokaart} alt="gokaart" />
            </SmallRightColumn>
          </Row>
        </Container>
      </WhoAmI>
      {/* <Hobbies>
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
      </Hobbies> */}
    </HomePage>
  );
};
