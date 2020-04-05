import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Task = ({ task }) => {
  const styleForListItem = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    padding: "0.4rem",
    height: "2rem",
    fontSize: "1.5rem",
  };

  const styleForButton = {
    display: "inline-block",
    marginTop: "4px",
  };

  const styleForSpan = {
    width: "300px",
    textAlign: "left",
  };

  const { removeTask, findItem } = useContext(TaskListContext);

  return (
    <li style={styleForListItem}>
      <span style={styleForSpan}> {task.title}</span>
      <Button style={styleForButton} onClick={() => removeTask(task.id)}>
        <DeleteIcon />
      </Button>
      <Button style={styleForButton} onClick={() => findItem(task.id)}>
        <EditIcon />
      </Button>
    </li>
  );
};

export default Task;
