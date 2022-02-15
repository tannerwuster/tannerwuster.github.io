import React from "react";
import {
  MainFooter,
  Row,
  Social,
  SocialLink,
  SocialImage,
  EmailMeButton,
  SmallRow,
} from "./styles";
import instagram from "../../images/instagramlogo.svg";
import github from "../../images/githublogo.svg";
import twitter from "../../images/twitterlogo.svg";
import linkedin from "../../images/linkedinlogo.svg";
import discord from "../../images/discord.png";
import spotify from "../../images/spotify.png";

export const SkillsSecetion = () => {
  return (
    <MainFooter>
      <Social>
        <SocialLink
          href="https://www.instagram.com/tanner.wuster/"
          title="Instagram Page"
        >
          <SocialImage
            loading="lazy"
            src={instagram}
            width="40"
            height="40"
            alt=""
            className="wp-image-695 alignnone size-medium"
            sizes="(max-width: 15px) 100vw, 15px"
          ></SocialImage>
        </SocialLink>
        <SocialLink href="https://twitter.com/tanner_wuster" title="Twitter">
          <SocialImage
            loading="lazy"
            src={twitter}
            width="40"
            height="40"
            alt=""
            className="wp-image-694 alignnone size-medium"
          ></SocialImage>
        </SocialLink>
        <SocialLink href="https://github.com/tannerwuster" title="Github">
          <SocialImage
            loading="lazy"
            src={github}
            width="40"
            height="40"
            alt=""
            className="wp-image-696 alignnone size-medium"
            sizes="(max-width: 15px) 100vw, 15px"
          ></SocialImage>
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/tanner-anthony-wuster/"
          title="Linkedin"
        >
          <SocialImage
            loading="lazy"
            src={linkedin}
            width="40"
            height="40"
            alt=""
            className="wp-image-1457 alignnone size-medium"
            sizes="(max-width: 15px) 100vw, 15px"
          ></SocialImage>
        </SocialLink>
        <SocialLink href="https://discord.gg/dWfxqVhF" title="Discord">
          <SocialImage
            loading="lazy"
            src={discord}
            width="40"
            height="40"
            alt=""
            className="wp-image-1457 alignnone size-medium"
            sizes="(max-width: 15px) 100vw, 15px"
          ></SocialImage>
        </SocialLink>
        <SocialLink
          href="https://open.spotify.com/user/1285493563"
          title="Spotify"
        >
          <SocialImage
            loading="lazy"
            src={spotify}
            width="40"
            height="40"
            alt=""
            className="wp-image-1457 alignnone size-medium"
            sizes="(max-width: 15px) 100vw, 15px"
          ></SocialImage>
        </SocialLink>
        <Row>
          <EmailMeButton href="mailto:tannerwuster@gmail.com?subject=">
            EMAIL ME
          </EmailMeButton>
        </Row>
      </Social>
      <SmallRow>TWU</SmallRow>
    </MainFooter>
  );
};
