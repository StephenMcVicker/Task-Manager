import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskListContextProvider from "./context/TaskListContext";
import TaskForm from "./components/TaskForm";
import { red } from "@material-ui/core/colors";

function App() {
  const styleForDiv = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFECE6",
    wdith: "400px",
    height: "600px",
    padding: "2rem",
    marginTop: "1rem",
    borderRadius: "10px",
    overflowY: "auto",
  };

  const styleForForm = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem",
  };

  return (
    <TaskListContextProvider>
      <Container maxWidth="sm">
        <div style={styleForDiv}>
          <h1 style={{ marginBottom: "2rem" }}>Task Manager</h1>
          <TaskForm style={styleForForm} />
          <TaskList />
        </div>
      </Container>
    </TaskListContextProvider>
  );
}

export default App;
