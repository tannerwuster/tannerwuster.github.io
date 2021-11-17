import styled from "styled-components";

export const AppBar = styled.section`
  position: fixed;
  background-color: #faf9f9;
  position: relative;
  width: 100%;
  z-index: 300;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-flow: row wrap;
`;

export const AvitarBackground = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(0deg, #faf9f9 60%, #37647e 0);
`;

export const Picture = styled.img`
  width: 187px;
  height: 187px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 1px 2px black;
  margin-left: 20%;
`;

export const Name = styled.h1`
  font-family: system-ui;
  text-align: start;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
  pointer-events: auto;
  line-height: normal;
  margin: 0;
  font-size: 40px;
  font-weight: 800;
  // margin: -160px 0px 100px calc((125% - 980px) * 0.5);
  letter-spacing: 0.1em;
  text-align: center;
`;

export const AboutMeDiv = styled.div`
  font-family: system-ui;
  font-size: 20px;
  font-weight: 400;
  // margin: 0px 0px 10px calc((100% - 980px) * 0.5);
  // left: 100px;
  justify-self: start;
  // align-self: start;
  // margin-right: 20%
`;

export const AboutMeParagraph = styled.p`
  line-height: 2em;
  text-align: left;
  font-size: 20px;
  margin: 5% 25%;
`;
