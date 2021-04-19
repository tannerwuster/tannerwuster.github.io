import styled from "styled-components";

export const AppBar = styled.header`
  font-family: "Work Sans", sans-serif;
  font-size: 14px;
  line-height: 1.4285em;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: row;
  position: static;
  color: #ffffff;
  background-color: #626f7d;
`;

export const Toolbar = styled.div`
  color: #ffffff;
  box-sizing: inherit;
  position: relative;
  align-items: center;
  padding-left: 152px;
  padding-right: 152px;
  min-height: 64px;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Typography = styled.div`
  width: 36.7%;
  flex-grow: 1;
  line-height: 1.6;
`;

export const Link = styled.a`
  align-items: center;
  list-style: none;
  list-style-type: disc;
  line-height: 1em;
  box-sizing: border-box;
  color: black;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
  text-decoration: none;
  display: block;
  position: relative;
  text-transform: uppercase;
  font-size: 16px;
  transition: color 300ms ease 0ms;
  padding-left: 11px;
  padding-right: 11px;
  &:hover {
    color: #000000;
    opacity: 50%;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
  height: 100px;
  position: relative;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Icon = styled.span`
  width: 1em;
  height: 1em;
  overflow: hidden;
  font-size: 1.5rem;
  flex-shrink: 0;
  user-select: none;
`;

export const MenuItem = styled.div`
  background: transparent !important;
  font-weight: 400;
  font-family: "Work Sans", sans-serif;
  font-size: 14px;
  line-height: 1.4285em;
  color: #ffffff;
  box-sizing: inherit;
  display: flex;
  &:hover {
    color: #000000 !important;
  }
`;

export const Button = styled.button`
  overflow: visible;
  border: 0;
  margin: 0;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  min-width: 64px;
  box-sizing: border-box;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  color: inherit;
  border-color: currentColor;
  font-size: 0.9375rem;
  cursor: pointer;
  padding: 8px 8px;
  white-space: nowrap;
`;
