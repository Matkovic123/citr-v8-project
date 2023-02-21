import { useEffect, useRef, MutableRefObject, ReactElement } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactElement }) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot || !elRef.current) {
      return;
    }
    modalRoot.appendChild(elRef.current);

    // anything you return from useEffect if run when component unmounts from the dom, like using componentWillUnmount() lifecycle hook
    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      } // used to remove something froom DOM, removing event listeners, timers/intervals
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current); // div wrapper is not needed, it's just for CSS purposes
};

export default Modal;
