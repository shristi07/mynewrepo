import React, { useCallback, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addFile, addFolder } from "../../../Redux/DriveAction";
import "./AddButtons.css";

const AddButtons = () => {
  const [modalType, setModalType] = useState("");
  const [name, setName] = useState("");
  const [fileType, setFileType] = useState("PDF");
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setModalType("");
    setName("");
  };
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const handleAdd = useCallback((modalType, data) => {
    if (modalType === "folder") dispatch(addFolder(data));
    else dispatch(addFile({ ...data, type: fileType }));
  }, []);

  return (
    <>
      <div className="button-container">
        <Button
          onClick={() => {
            handleShow();
            setModalType("folder");
          }}
          className="add-folder-btn"
          variant="outline-secondary"
        >
          New Folder
        </Button>{" "}
        <Button
          onClick={() => {
            handleShow();
            setModalType("file");
          }}
          className="add-file-btn"
          variant="secondary"
        >
          New File
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              Create a {modalType === "folder" ? "Folder" : "File"}
            </Modal.Title>
          </Modal.Header>
          <Form.Group>
            <Form.Label>
              {modalType === "folder" ? "Folder" : "File"} Name
            </Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter your Value"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          {modalType === "file" && (
            <Form.Group style={{ marginTop: "10px" }}>
              <Form.Label>File Type</Form.Label>
              <Form.Control
                as="select"
                id="select"
                type="select"
                name="fileType"
                value={fileType}
                onChange={(e) => {
                  setFileType(e.target.value);
                }}
              >
                <option selected value="PDF">
                  PDF
                </option>
                <option value="PPT">PPT</option>
                <option value="DOC">DOC</option>
              </Form.Control>
            </Form.Group>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            disabled={!name}
            variant="outline-success"
            onClick={() => {
              const data = {
                name,
                entity: modalType,
              };
              handleAdd(modalType, data);
              handleClose();
            }}
          >
            {modalType === "folder" ? "Add Folder" : "Add File"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddButtons;
