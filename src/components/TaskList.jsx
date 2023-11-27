import { useState } from 'react';
import {  FaEye , FaEyeSlash} from 'react-icons/fa';
import TaskCard from './TaskCard';
import "./TaskList.css"

const TaskList = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  }

  function handleEdit(id, updatedTask) {
    setTasks((prevTasks) =>
      prevTasks.map(task => (task.id === id ? { ...task, name: updatedTask } : task))
    );
  }

  return (
    <section className='tasklist'>
      <ul>
        <div className='header'>
          <h1>Tasklist</h1>
          <div>
            <button className='trigger' onClick={() => setShow(!show)}>
              {show ? <FaEye /> : <FaEyeSlash />}
            </button>
            <button className='clear' onClick={() => setTasks([])}>
              Clear All
            </button>
          </div>
        </div>
        { show && tasks
          .filter(task => !task.completed)
          .map(task => (
            <TaskCard
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              setTasks={setTasks}
            />
          ))}
      </ul>
    </section>
  );
};

export default TaskList;
