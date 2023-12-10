import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css"

const Backdrop = props => {
    return (
        <div className={classes.backdrop}></div>
    );
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

const overlayElement = document.getElementById('overlays');

const Modal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop />
                , overlayElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>
                , overlayElement)}
        </React.Fragment>
    );
}

export default Modal;