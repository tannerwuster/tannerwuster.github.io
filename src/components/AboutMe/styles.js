import styled from "styled-components";

export const AboutMePage = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  transition: all 0.4s ease;
`;

export const Row = styled.div`
  // background: white;
  // margin: auto;
  // margin-right: 0 !important;
  // position: relative;
  // padding: 27px 0;
  // display: flex;
  margin-right: -15px;
  margin-left: -15px;
  background: yellow;
`;

export const SmallColumn = styled.div`
  // background: transparent;
  // float: left;
  // position: relative;
  // min-height: 1px;
  // mix-blend-mode: unset !important;
  // margin-right: 5.5%;
  // width: 47.25%;
  width: 50%;
`;

export const WhoAmI = styled.div`
  padding: 14px 20px;
  background: blue;
`;

export const Hobbies = styled.div`
  padding: 14px 20px;
  background: red;
`;

export const ThingsILove = styled.div`
  padding: 14px 20px;
  background: red;
`;

export const Title = styled.h3`
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #555859;
`;

export const SectionTitle = styled.div`
  padding-bottom: 10px;
`;
