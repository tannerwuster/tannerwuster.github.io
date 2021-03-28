import React from "react";
import {
  MainFooter,
  Row,
  Column,
  UI,
  List,
  SmallColumn,
  Header,
  SmallRow,
  Link,
  Social,
  Copyright,
  SocialLink,
  SocialImage,
} from "./styles";

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
        <Column>
          <Header>
            <Link href="">About</Link>
          </Header>
        </Column>
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
              title="KAART Group Facebook Page"
            >
              <SocialImage
                loading="lazy"
                src="https://kaart.com/wp-content/uploads/2020/08/KG-Facebook-icon.svg"
                width="15"
                height="15"
                alt=""
                className="wp-image-695 alignnone size-medium"
                srcset="https://kaart.com/wp-content/uploads//2020/08/KG-Facebook-icon.svg 150w,
          https://kaart.com/wp-content/uploads//2020/08/KG-Facebook-icon.svg 300w,
          https://kaart.com/wp-content/uploads//2020/08/KG-Facebook-icon.svg 1024w,
          https://kaart.com/wp-content/uploads//2020/08/KG-Facebook-icon.svg 1536w,
          https://kaart.com/wp-content/uploads//2020/08/KG-Facebook-icon.svg 2048w,
          https://kaart.com/wp-content/uploads//2020/08/KG-Facebook-icon.svg 40w"
                sizes="(max-width: 15px) 100vw, 15px"
              ></SocialImage>
            </SocialLink>
            <SocialLink
              href="https://github.com/tannerwuster"
              title="KAART Group Github"
            >
              <SocialImage
                loading="lazy"
                src="https://kaart.com/wp-content/uploads/2020/08/KG-GitHub-Icon.svg"
                width="15"
                height="15"
                alt=""
                className="wp-image-696 alignnone size-medium"
                srcset="https://kaart.com/wp-content/uploads//2020/08/KG-GitHub-Icon.svg 150w,
              https://kaart.com/wp-content/uploads//2020/08/KG-GitHub-Icon.svg 300w,
              https://kaart.com/wp-content/uploads//2020/08/KG-GitHub-Icon.svg 1024w,
              https://kaart.com/wp-content/uploads//2020/08/KG-GitHub-Icon.svg 1536w,
              https://kaart.com/wp-content/uploads//2020/08/KG-GitHub-Icon.svg 2048w,
              https://kaart.com/wp-content/uploads//2020/08/KG-GitHub-Icon.svg 40w"
                sizes="(max-width: 15px) 100vw, 15px"
              ></SocialImage>
            </SocialLink>
            <SocialLink
              href="https://twitter.com/tanner_wuster"
              title="KAART Group WIKI"
            >
              <SocialImage
                loading="lazy"
                src="https://kaart.com/wp-content/uploads/2020/08/KG-WIKI-icon.svg"
                width="32"
                height="15"
                alt=""
                className="wp-image-694 alignnone size-medium"
              ></SocialImage>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/tanner-anthony-wuster/">
              <SocialImage
                loading="lazy"
                src="https://kaart.com/wp-content/uploads/2020/10/iconmonstr-linkedin-1.svg"
                width="15"
                height="15"
                alt=""
                className="wp-image-1457 alignnone size-medium"
                srcset="https://kaart.com/wp-content/uploads//2020/10/iconmonstr-linkedin-1.svg 150w,
              https://kaart.com/wp-content/uploads//2020/10/iconmonstr-linkedin-1.svg 300w,
              https://kaart.com/wp-content/uploads//2020/10/iconmonstr-linkedin-1.svg 1024w,
              https://kaart.com/wp-content/uploads//2020/10/iconmonstr-linkedin-1.svg 1536w,
               https://kaart.com/wp-content/uploads//2020/10/iconmonstr-linkedin-1.svg 2048w,
               https://kaart.com/wp-content/uploads//2020/10/iconmonstr-linkedin-1.svg 24w"
                sizes="(max-width: 15px) 100vw, 15px"
              ></SocialImage>
            </SocialLink>
          </Social>
        </SmallColumn>
      </SmallRow>
    </MainFooter>
  );
};
