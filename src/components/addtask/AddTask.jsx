import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtask } from "../../JS/actions/toDoActions";
import './addtask.css'
import { Button } from "react-bootstrap";
const AddTask = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();//ne fais pas le chargement du formulaire
    if (title.trim() === "") return alert("fill this input");//pour ne pas avoir des tache vide
    const newTask = {
      id: Math.random(),
      title: title.trim(),
      completed: false,
    };
    dispatch(addtask(newTask));
    setTitle("");
  };
  return (
    <div className="addDiv">
      <form>
        <input
          type="text"
          placeholder="title of task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button onClick={handleAdd}>Add</Button>
      </form>
    </div>
  );
};

export default AddTask;
