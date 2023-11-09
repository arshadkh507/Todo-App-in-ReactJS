import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import TaskList from "./components/TaskList";

const App = () => {

  return (
    <div className="app">
      <Header/>
    <TaskList title="Random"/>
    </div>
  );
};

export default App;

//  show={show} tasks={tasks} setShow={setShow} handleDeleteTask={handleDeleteTask}