import React, { useContext, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addTask, editTask, editItem, clearList } = useContext(
    TaskListContext
  );

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleChange}
      noValidate
      autoComplete="off"
      style={{ marginBottom: "2rem" }}
    >
      <TextField
        fullWidth
        required
        label={editItem ? "Edit Task" : "Add Task"}
        value={title}
      />

      <div style={{ display: "inline-block" }}>
        <Button variant="contained" color="primary" type="submit">
          {editItem ? "Edit Task" : "Add Task"}
        </Button>
        <Button variant="contained" color="secondary" onClick={clearList}>
          Clear All
        </Button>
      </div>
    </form>
  );
};

export default TaskForm;
