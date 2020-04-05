import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  const styleForList = {
    width: "100%",
    height: "100%",
    backgroundColor: "#E6D4CF",
    margin: "auto",
    overflowY: "auto",
    textAlign: "center",
  };

  const styleForNoTasksText = {
    fontSize: "2rem",
    paddingTop: "2rem",
    color: "#989DB3",
  };

  return (
    <div style={styleForList}>
      {tasks.length ? (
        <ul>
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div style={styleForNoTasksText}>No Tasks</div>
      )}
    </div>
  );
};

export default TaskList;
