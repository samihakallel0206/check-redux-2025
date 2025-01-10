import React, { useState } from "react";
import "./taskItem.css";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask, editTask } from "../../JS/actions/toDoActions";
import { Button, Form, Modal } from "react-bootstrap";

const TaskItem = ({ task }) => {
  // **************************bootstrap****************************************
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // ******************************************************************************
  const [newTitle, setNewTitle] = useState(task.title);
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editTask(task.id, newTitle.trim()));
    handleClose();
  };
  return (
    <div>
      <h2
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
    {/* ************************button delete************************************************* */}
        <Button
          style={{ width: "100px", margin: "1%" }}
          variant="danger"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </Button>
      {/* **********************************buton done ******************************************* */}

        <Button
          style={{ width: "100px", margin: "1%" }}
          variant={task.completed ? "warning" : "secondary"}
          onClick={() => dispatch(doneTask(task.id))}
        >
          Done
        </Button>
        {/* ************************************button Edit************************ */}
        <Button
          style={{ width: "100px", margin: "1%" }}
          variant="primary"
          onClick={handleShow}
        >
          Edit
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="text"
              placeholder="task's title ..." 
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default TaskItem;
