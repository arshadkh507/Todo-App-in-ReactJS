import { useState } from "react";
import TaskCard from "./TaskCard";
import BoxCard from "./BoxCard";

const TaskList = (props) => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Record Lecture", completed: true },
    { id: 5272, name: "Edit React Lectures", completed: false },
    { id: 5274, name: "Watch Lecture", completed: false },
  ]);

  const [show, setShow] = useState(true);

  function handleDeleteTask(id) {
    console.log(id);
    setTasks(() => tasks.filter((task) => task.id != id));
  }
  return (
    <div className="task-container">
      <h1>Tasks List {props.title}</h1>
      <button className="trigger" onClick={() => setShow(!show)}>
        Toggle
      </button>
      <ul className="tasklist">
        {show &&
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              handleDelete={handleDeleteTask}
            />
          ))}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor, sit amet </p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </BoxCard>
      <BoxCard result="warning">
        <p>Lorem, ipsum dolor.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          ratione?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          consectetur similique quaerat molestiae esse nemo?
        </p>
      </BoxCard>
    </div>
  );
};

export default TaskList;
