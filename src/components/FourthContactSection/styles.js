import styled from "styled-components";

export const HomePage = styled.section`
height: 661px;
// background-color: #626f7d;
position: relative;
width: 100%;
z-index: 300;
overflow: hidden;
background-position: center center;
background-repeat: no-repeat;
display: block;
font-family: Proxima Nova Regular,serif;
font-weight: 400;
font-style: normal;
font-size: 1em;
`;

export const WhoAmI = styled.section`
  padding: 70px 300px;
  background: #eef1f3;
`;

export const Hobbies = styled.section`
  padding: 70px 300px;
  background: #626f7d;
  border-radius: 6px;
`;

export const ThingsILove = styled.section`
  padding: 70px 300px;
  background: #eef1f3;
`;

export const Container = styled.div`
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 1170px;
`;

export const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
`;

export const SmallLeftColumn = styled.div`
  box-sizing: border-box;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  // float: center;
  width: 50%;
  animation-duration: 1s;
  animation-fill-mode: both;
  visibility: visible;
  animation-delay: 1.2s;
  animation-name: fadeInLeft;
`;

export const SmallRightColumn = styled.div`
  box-sizing: border-box;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  // float: center;
  width: 50%;
  animation-duration: 1s;
  animation-fill-mode: both;
  visibility: visible;
  animation-delay: 1.2s;
  animation-name: fadeInLeft;
`;

export const SectionTitle = styled.div`
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  font-family: "Open Sans", sans-serif;
  visibility: visible;
  box-sizing: border-box;
  padding-bottom: 10px;
`;

export const Header = styled.h3`
  line-height: 1.1;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #555859;
`;

export const SubHeading = styled.p`
  margin: 0 0 10px;
  letter-spacing: 0.5px;
  line-height: 28px;
  color: #666;
  font-size: 17px;
`;

export const Picture = styled.img`
  border: 0;
  border-radius: 6px;
  vertical-align: middle;
  display: flex;
  max-width: 100%;
  height: auto;
  // &:hover {
  //   transform: scale(1.2);
  // }
  display: block;
`;

export const LightParagraph = styled.p`
  margin: 0 0 10px;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 1.4;
  font-size: 18px;
  color: white;
`;

export const DarkParagraph = styled.p`
  margin: 0 0 10px;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 1.4;
  font-size: 18px;
`;

export const LightHeading = styled.h3`
  line-height: 1.1;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: white;
`;

export const LightSubHeading = styled.p`
  margin: 0 0 10px;
  letter-spacing: 0.5px;
  line-height: 28px;
  color: #666;
  font-size: 17px;
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
