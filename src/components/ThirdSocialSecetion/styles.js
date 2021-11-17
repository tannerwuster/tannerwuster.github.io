import styled from "styled-components";
import socialbackground4 from "../../images/socialbackground4.gif";

export const MainFooter = styled.div`
  background-image: url(${socialbackground4});
  width: 100%
  color: #666;
  border-top-width: 3px;
  border-top-color: #6a6c7c;
`;

export const Link = styled.a`
  color: grey;
  &:hover {
    color: #f4753c;
  }
`;

export const Social = styled.div`
  text-align: center;
  padding-bottom: 45px;
`;

export const SocialLink = styled.a`
  color: grey !important;
  filter: grayscale(20%) !important;
`;

export const SocialImage = styled.img`
  margin: 40px;
`;

export const EmailMeButton = styled.a`
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1em;
  color: black;
  border-style: solid;
  border-color: black;
  background-color: transparent;
  width: 10%;
  padding: 8px 8px;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #d3d3d3;
    opacity: 0.5;
    border-color: #d3d3d3;
  }
`;

export const SmallRow = styled.div`
  border: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  font-family: "Work Sans", sans-serif;
  font-size: 35px;
  font-weight: 800;
  background-color: #faf9f9;
  color: black;
`;

export const Row = styled.div`
  background: transparent;
  align-content: center;
  padding-top: 25px;
`;
