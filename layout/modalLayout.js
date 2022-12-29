import { useEffect, useRef } from "react";
import ModalFun from "../util/modalEngine";

const ModalLayout = ({
  children,
  modalName,
  style,
  opener,
  rightSide,
  body,
}) => {
  const modalRef = useRef();
  useEffect(() => {
    ModalFun(modalName, false, opener, modalRef, false, body, rightSide);
  });

  return (
    <div ref={modalRef} className={`${modalName} ${style} h-full `}>
      {children}
    </div>
  );
};

export default ModalLayout;
