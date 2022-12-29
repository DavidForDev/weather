import { useEffect, useRef } from "react";
import ModalFun from "../util/modalEngine";

const ModalLayout = ({
  children,
  modalName,
  className,
  opener,
  rightSide,
  body,
}) => {
  const modalRef = useRef();
  useEffect(() => {
    ModalFun(modalName, false, opener, modalRef, false, body, rightSide);
  });

  return (
    <div className={`${modalName} ${className} h-full`} ref={modalRef}>
      {children}
    </div>
  );
};

export default ModalLayout;
