import React from "react";
import {
  MainFooter,
  Row,
  Column,
  SmallColumn,
  Header,
  SmallRow,
  Link,
  Social,
  Copyright,
  SocialLink,
  SocialImage,
} from "./styles";
import instagramlogo from "../../images/instagramlogo.svg";
import githublogo from "../../images/githublogo.svg";
import twitterlogo from "../../images/twitterlogo.svg";
import linkedinlogo from "../../images/linkedinlogo.svg";

export const Footer = () => {
  return (
    <MainFooter>
      <Row>
        {/* Column1 */}
        <Column>
          <Header>
            <Link href="">Home</Link>
          </Header>
        </Column>
        {/* Column2 */}
        {/* <Column>
          <Header>
            <Link href="">About</Link>
          </Header>
        </Column> */}
        {/* Column3 */}
        <Column>
          <Header>
            <Link href="">Projects</Link>
          </Header>
        </Column>
        {/* Column4 */}
        <Column>
          <Header>
            <Link href="">Contact</Link>
          </Header>
        </Column>
      </Row>
      <SmallRow>
        <SmallColumn>
          <Copyright>
            &copy;{new Date().getFullYear()} Tanner A. Wuster
          </Copyright>
        </SmallColumn>
        <SmallColumn>
          <Social>
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
                srcset="instagramlogo 150w,
                instagramlogo 300w,
                instagramlogo 1024w,
                instagramlogo 1536w,
                instagramlogo 2048w,
                instagramlogo 40w"
                sizes="(max-width: 15px) 100vw, 15px"
              ></SocialImage>
            </SocialLink>
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
                srcset="githublogo 150w,
                githublogo 300w,
                githublogo 1024w,
                githublogo 1536w,
                githublogo 2048w,
                githublogo 40w"
                sizes="(max-width: 15px) 100vw, 15px"
              ></SocialImage>
            </SocialLink>
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
            <SocialLink href="https://www.linkedin.com/in/tanner-anthony-wuster/">
              <SocialImage
                loading="lazy"
                src={linkedinlogo}
                width="15"
                height="15"
                alt=""
                className="wp-image-1457 alignnone size-medium"
                srcset="linkedinlogo 150w,
                linkedinlogo 300w,
                linkedinlogo 1024w,
                linkedinlogo 1536w,
                linkedinlogo 2048w,
                linkedinlogo 24w"
                sizes="(max-width: 15px) 100vw, 15px"
              ></SocialImage>
            </SocialLink>
          </Social>
        </SmallColumn>
      </SmallRow>
    </MainFooter>
  );
};
