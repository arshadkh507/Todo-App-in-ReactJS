import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import TaskList from "./components/TaskList";

const App = () => {
  const info = "Random"

  return (
    <div className="app">
      <Header/>
    <TaskList info="Random"/>
    </div>
  );
};

export default App;

//  show={show} tasks={tasks} setShow={setShow} handleDeleteTask={handleDeleteTask}