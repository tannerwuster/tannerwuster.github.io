import React from "react";
import instagramlogo from "../../images/instagramlogo.svg";
import githublogo from "../../images/githublogo.svg";
import twitterlogo from "../../images/twitterlogo.svg";
import linkedinlogo from "../../images/linkedinlogo.svg";
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
  Social,
  SocialLink,
  SocialImage,
} from "./styles";
import tannerWU from "../../images/tannerphoto.png";

export const Contact = () => {
  return (
    <HomePage>
      <WhoAmI>
        <Container>
          <Row>
            <SmallLeftColumn>
              <SectionTitle>
                <Header>Contact</Header>
                <DarkParagraph>
                  <SocialLink
                    href="https://www.instagram.com/tanner.wuster/"
                    title="Tanners Instagram Page"
                  >
                    <SocialImage
                      loading="lazy"
                      src={instagramlogo}
                      width="15"
                      height="15"
                      alt=""
                      className="wp-image-695 alignnone size-medium"
                    ></SocialImage>
                  </SocialLink>
                </DarkParagraph>
                <DarkParagraph>
                  <SocialLink
                    href="https://github.com/tannerwuster"
                    title="Tanners Github"
                  >
                    <SocialImage
                      loading="lazy"
                      src={githublogo}
                      width="15"
                      height="15"
                      alt=""
                      className="wp-image-696 alignnone size-medium"
                    ></SocialImage>
                  </SocialLink>
                </DarkParagraph>
                <DarkParagraph>
                  <SocialLink
                    href="https://twitter.com/tanner_wuster"
                    title="Tanners Twitter"
                  >
                    <SocialImage
                      loading="lazy"
                      src={twitterlogo}
                      width="15"
                      height="15"
                      alt=""
                      className="wp-image-694 alignnone size-medium"
                    ></SocialImage>
                  </SocialLink>
                </DarkParagraph>
                <DarkParagraph>
                  <SocialLink href="https://www.linkedin.com/in/tanner-anthony-wuster/">
                    <SocialImage
                      loading="lazy"
                      src={linkedinlogo}
                      width="15"
                      height="15"
                      alt=""
                      className="wp-image-1457 alignnone size-medium"
                    ></SocialImage>
                  </SocialLink>
                </DarkParagraph>
              </SectionTitle>
            </SmallLeftColumn>
          </Row>
        </Container>
      </WhoAmI>
    </HomePage>
  );
};
