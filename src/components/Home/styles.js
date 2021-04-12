import styled from "styled-components";

export const HomePage = styled.div`
  display: flex;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WhoAmI = styled.section`
  padding: 70px 0;
  background: #eef1f3;
`;

export const Hobbies = styled.section`
  padding: 70px 0;
  background: #626f7d;
  border-radius: 6px;
`;

export const ThingsILove = styled.section`
  padding: 70px 0;
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

export const SmallColumn = styled.div`
  box-sizing: border-box;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  float: left;
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
  visibility: visible;
  box-sizing: border-box;
  margin: 0 0 10px;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 1.4;
  font-size: 18px;
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
