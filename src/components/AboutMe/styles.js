import styled from "styled-components";

export const AboutMePage = styled.div`
  width: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: black;
  margin: auto;
  transform: translate(0%, -10%);
  border: 1px solid black;
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

export const Section = styled.div`
  padding: 70px 0;
`;

export const Title = styled.h3`
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #555859;
`;

export const SectionTitle = styled.div`
  padding-bottom: 10px;
`;
