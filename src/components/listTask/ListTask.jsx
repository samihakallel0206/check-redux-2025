import React, { useState } from "react";
import "./listtask.css";
import TaskItem from "../task/TaskItem";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const ListTask = () => {
  const tasks = useSelector((state) => state.todoReducer.tasks);
  const [filter, setFilter] = useState("All");
  // console.log(tasks);
  return (
    <div>
      <div>
        {/* Buttons for filter  */}
        <Button variant="outline-info" onClick={() => setFilter("All")}>
          All
        </Button>
        <Button variant="outline-info" onClick={() => setFilter("Done")}>
          Done
        </Button>
        <Button variant="outline-info" onClick={() => setFilter("UnDone")}>
          UnDone
        </Button>
      </div>
{/* test with filter */}
      {filter === "Done"
        ? tasks
            .filter((el) => el.completed === true)
            .map((task) => <TaskItem task={task} key={task.id} />)
        : filter === "UnDone"
        ? tasks
            .filter((el) => el.completed === false)
            .map((task) => <TaskItem task={task} key={task.id} />)
        : tasks.map((task) => <TaskItem task={task} key={task.id} />)}
    </div>
  );
};

export default ListTask;
