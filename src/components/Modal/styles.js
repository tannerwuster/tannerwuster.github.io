import styled from "styled-components";

import closeButton from "images/closebutton.svg";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 100%;
  left: 50%;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s ease;

  ${(props) =>
    props.show
      ? `
    opacity: 1;
    pointer-events: auto;
    top: 50%;
    `
      : ``}

  transform: translate(-50%, -50%);
`;

export const CloseButton = styled.img.attrs({
  src: closeButton,
  alt: "Close Modal",
})`
  position: absolute;
  top: 8px;
  right: 8px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.05);
  opacity: 0.5;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;
