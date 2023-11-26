import { FaEye, FaEyeSlash, FaSquare } from "react-icons/fa";
import TaskCard from "./TaskCard";
import "./CompletedTasks.css";
import CompletedTaskCard from "./CompletedTaskCard";
import { useState } from "react";

const CompletedTasks = ({ completedTasks, setTasks }) => {

  const [show, setShow] = useState(true);

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };


  const handleClearAll = () => {
    // Filter out the completed tasks and update the state
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  return (
    <div className="completed-tasks">
      <ul>
        <div className="header">
          <h1>Completed Tasks</h1>
          <div>
          <button className='trigger' onClick={() => setShow(!show)}>
              {show ? <FaEye /> : <FaEyeSlash />}
            </button>
            <button className="clear" onClick={handleClearAll}>
              Clear All
            </button>
          </div>
        </div>
        { show && completedTasks.map(task => (
        <CompletedTaskCard
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          setTasks={setTasks}
        />
      ))}
      </ul>
    </div>
  );
};

export default CompletedTasks;
