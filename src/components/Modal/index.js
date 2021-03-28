import React from "react";

import { ModalWrapper, CloseButton } from "./styles";

export const Modal = ({ show, setShow, children }) => {
  return (
    <>
      <ModalWrapper show={show}>
        <CloseButton onClick={() => setShow(false)} />
        {children}
      </ModalWrapper>
    </>
  );
};
