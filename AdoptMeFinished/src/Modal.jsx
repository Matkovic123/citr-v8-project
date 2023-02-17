import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // anything you return from useEffect if run when component unmounts from the dom, like using componentWillUnmount() lifecycle hook
    return () => modalRoot.removeChild(elRef.current); // used ti remove something froom DOM, removing event listeners, timers/intervals
  }, []);

  return createPortal(<div>{children}</div>, elRef.current); // div wrapper is not needed, it's just for CSS purposes
};

export default Modal;
