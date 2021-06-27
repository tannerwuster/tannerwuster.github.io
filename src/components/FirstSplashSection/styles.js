import styled from "styled-components";

export const AppBar = styled.section`
height: 100%;
background-color: #626f7d;
position: relative;
width: 100%;
z-index: 300;
overflow: hidden;
background-position: center center;
background-repeat: no-repeat;
display: block;
font-family: "Work Sans", sans-serif;
font-weight: 400;
font-style: normal;
font-size: 1em;
`;

export const Toolbar = styled.div`
  width: 100%;
`;

export const Title = styled.div`
background: transparent !important;
text-transform: uppercase;
  font-weight: 400;
  font-family: "Work Sans", sans-serif;
  font-size: 15px;
  line-height: 1.4285em;
  text-align: center; 
  color: #ffffff;
  box-sizing: inherit;
  padding-top: 50px;
  color: black; 
`;

export const Logo = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 40%;
`;

export const Icon = styled.span`
  width: 1em;
  height: 1em;
  overflow: hidden;
  font-size: 1.5rem;
  flex-shrink: 0;
  user-select: none;
`;

export const Menu = styled.nav`
  text-align: center;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-color: white;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
`; 

export const MenuItem = styled.text`
  align-items: center;
  line-height: 1em;
  box-sizing: border-box;
  color: black;
  // margin: 0;
  // padding: 0;
  // border: 0;
  // outline: 0;
  vertical-align: baseline;
  background: transparent;
  // text-decoration: none;
  // display: block;
  position: relative;
  text-transform: uppercase;
  font-size: 14px;
  // transition: color 300ms ease 0ms;
  padding-left: 11px;
  padding-right: 11px;
  // background: transparent !important;
  line-height: 1.75em;
  display: inline-block;
  font-weight: 400;
  font-family: "Work Sans", sans-serif;
  text-align: center; 
  &:hover {
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: white;
    transform: scale(1.1);
    cursor: pointer;

  }
`;