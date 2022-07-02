import React, { useContext } from "react";
import ReactDOM from "react-dom";
import ThemeContext from "../../Context/themeContext";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={isDarkMode ? classes.modalDarkTheme : classes.modal}>
      <div
        className={classes.content}
        style={{ color: isDarkMode ? "#efe2ba" : null }}
      >
        {props.children}
      </div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </React.Fragment>
  );
};
export default Modal;
