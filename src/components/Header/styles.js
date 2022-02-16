import styled from "styled-components";

export const AppBar = styled.section`
  font-family: "Lucida Sans Typewriter", "Lucida Console", Monaco,
    "Bitstream Vera Sans Mono", monospace;
  padding-top: 1em;
  font-size: 15px;
`;

export const MenuItem = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;

  display: inline-block;
  // padding: 15px 20px;
  position: relative;

  &:hover {
    cursor: pointer;
    background-image: linear-gradient(
      transparent 15px,
      white 50%,
      #B026FF 100%
    );
  }
`;

export const Menu = styled.div`
  padding-left: 60%;
`;

export const Link = styled.li`
  font-size: 15px;
  display: table-cell;
  position: relative;
  padding: 15px 20px;
`;

export const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;
