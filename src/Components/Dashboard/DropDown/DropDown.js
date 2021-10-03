import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Dropdown, Form, Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  deleteEntity,
  duplicateEntity,
  renameEntity,
} from "../../../Redux/DriveAction";
import "./DropDown.css";

const DropDown = ({ details, index }) => {
  const [modalType, setModalType] = useState("");
  const [rename, setRename] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setModalType("");
    setRename("");
  };
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setRename(details.name);
  }, []);

  const handleOperation = useCallback((operationType) => {
    switch (operationType) {
      case "rename":
        return handleShow(), setModalType("rename");

      case "delete":
        return handleShow(), setModalType("delete");
      case "duplicate":
        return dispatch(duplicateEntity(details, index));
      default:
        return operationType;
    }
  }, []);
  const performOperation = useCallback(
    (operationType) => {
      switch (operationType) {
        case "rename":
          return dispatch(renameEntity({ ...details, name: rename }, index));
        case "delete":
          return dispatch(deleteEntity(details, index));
        default:
          return operationType;
      }
    },
    [rename]
  );
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          variant="light"
          id="dropdown-basic"
          className="operation-dropdown"
        ></Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleOperation("rename")}>
            <FontAwesomeIcon icon={faPencilAlt} />
            Rename {details.entity}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleOperation("duplicate")}>
            <FontAwesomeIcon icon={faFolder} />
            Duplicate {details.entity}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleOperation("delete")}>
            <FontAwesomeIcon icon={faTrashAlt} />
            Delete {details.entity}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <Modal.Header closeButton>
            <Modal.Title>
              {modalType === "rename"
                ? "Rename"
                : modalType === "delete"
                ? "Delete"
                : "Duplicate"}
            </Modal.Title>
          </Modal.Header>
          {modalType === "rename" && (
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter your Value"
                value={rename}
                onChange={(e) => setRename(e.target.value)}
              />
            </Form.Group>
          )}
          {modalType === "delete" && (
            <Form.Label>
              Are you sure you want to delete this {details.entity}? This is a
              permanent action and can't be undone.
            </Form.Label>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant={
              modalType === "rename" ? "outline-danger" : "outline-success"
            }
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            disabled={modalType === "rename" && !rename}
            variant={modalType === "rename" ? "outline-success" : "danger"}
            onClick={() => {
              performOperation(modalType);
              handleClose();
            }}
          >
            {modalType === "rename" ? "Rename" : "Continue"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DropDown;
