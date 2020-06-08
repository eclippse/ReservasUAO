import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./Modal.css";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";

function ButModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton className="o-modal-container">
        <div className="o-modal">
          <div className="o-container-icon">
            <img src={props.icon} />
          </div>
          <p>{props.text}</p>

          {props.reservar ? (
            <Button className={"o-button-modal"} onClick={props.reservar}>
              Aceptar
            </Button>
          ) : (
            <a href={props.go}>
              <Button className={"o-button-modal"} onClick={props.onHide}>
                Aceptar
              </Button>
            </a>
          )}
          <Button className={"o-button-modal-c"} onClick={props.onHide}>
            Cancelar
          </Button>
        </div>
      </ModalHeader>
    </Modal>
  );
}

export default ButModal;
