import styled from "styled-components";

export const MainFooter = styled.div`
  font-family: "Work Sans", sans-serif;
  width: 100vw;
  color: #666;
  line-height: 1.7em;
  font-weight: 500;
  box-sizing: border-box;
  margin: 0;
  outline: 0;
  vertical-align: baseline;
  border: 0 solid #333;
  position: relative;
  // padding: 54px 0;
  border-top-width: 3px;
  border-top-color: #6a6c7c;
  // padding-top: 0px;
  // padding-bottom: 0px;
  height: 2em;
  background-height: 15em;
  background: white;
`;

export const Row = styled.div`
  background: white;
  margin: auto;
  margin-right: 0 !important;
  position: relative;
  padding: 27px 0;
  display: flex;
`;

export const Column = styled.div`
  text-align: left;
  font-size: 100%;
  margin-right: 6%;
  margin-left: 7%;
  width: 20.875%;
`;

export const Header = styled.header`
  margin-bottom: 8px;
  color: #6a6c7c !important;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  background: transparent;
  padding-bottom: 0;
`;

export const SmallRow = styled.div`
  border: 0;
  font-size: 100%;
  margin: auto;
  position: relative;
  padding: 10px 0;
  display: flex;
  background-color: #fafafa !important;
`;

export const SmallColumn = styled.div`
  background: transparent;
  float: left;
  position: relative;
  min-height: 1px;
  mix-blend-mode: unset !important;
  margin-right: 5.5%;
  width: 47.25%;
`;

export const Link = styled.a`
  align-items: center;
  font-weight: 400;
  list-style: none;
  list-style-type: disc;
  line-height: 1em;
  box-sizing: border-box;
  color: #000000;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
  text-decoration: none;
  display: block;
  position: relative;
  font-size: 16px;
  transition: color 300ms ease 0ms;
  padding-left: 11px;
  padding-right: 11px;
  &:hover {
    color: grey;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  font-weight: 300;
  color: #6a6c7c !important;
  line-height: 1.8em;
  font-size: 100%;
  background: transparent;
`;

export const Social = styled.div`
  text-align: center;
  font-weight: 300;
  color: #6a6c7c !important;
  font-size: 100%;
  background: transparent;
  line-height: 1.8em;
  padding-bottom: 0;
`;

export const SocialLink = styled.a`
  color: grey !important;
  filter: grayscale(20%) !important;
`;

export const SocialImage = styled.img`
  filter: grayscale(20%) !important;
  margin-right: 22px;
`;
