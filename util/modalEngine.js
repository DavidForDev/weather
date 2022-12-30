const ModalFun = (
  container,
  closer,
  opener,
  menuRef,
  blackMode,
  body,
  rightSide
) => {
  let containerElement;
  let closerElement;
  let openerElement;
  let blackModeElement;
  let bodyElement;

  let openerClicked = 0;

  if (container) {
    containerElement = document.querySelector(`.${container}`);
  }
  if (closer) {
    closerElement = document.querySelectorAll(`.${closer}`);
  }
  if (opener) {
    openerElement = document.querySelector(`.${opener}`);
  }
  if (blackMode) {
    blackModeElement = document.querySelector(".black_bg");
  }
  if (body) {
    bodyElement = document.querySelector(`.${body}`);
  }

  // ========== Closer ========== \\
  if (closerElement) {
    closerElement.forEach((e) => {
      e.addEventListener("click", () => {
        containerElement.style.display = "none";
        if (blackModeElement) {
          blackModeElement.style.display = "none";
        }
      });
    });
  }

  // ========== Opener ========== \\
  if (openerElement) {
    openerElement.addEventListener("click", () => {
      openerClicked = 1;
      containerElement.style.width = "225px";
      bodyElement.style.transform = `translateX(225px)`;
      bodyElement.style.opacity = "0.3";
      bodyElement.style.pointerEvents = "none";
      if (blackModeElement) {
        blackModeElement.style.display = "flex";
      }
    });
  }

  // ========== Check mouseDown ========== \\
  let handler = (e) => {
    if (!menuRef.current?.contains(e.target) && openerClicked === 1) {
      containerElement.style.width = "0%";
      if (bodyElement) {
        bodyElement.style.transform = "translateX(0%)";
        bodyElement.style.opacity = "1";
        bodyElement.style.pointerEvents = "auto";
      }
      if (blackModeElement) {
        blackModeElement.style.display = "none";
      }
    }
  };

  document.addEventListener("mousedown", handler);

  return () => {
    document.removeEventListener("mousedown", handler);
  };
};

export default ModalFun;
