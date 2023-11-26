import { useState } from 'react';
import { FaTrash, FaEdit, FaSquare } from 'react-icons/fa';
import "./TaskCard.css";

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
              {show ? <FaSquare /> : <FaSquare />}
            </button>
            <button className='clear' onClick={() => setTasks([])}>
              Clear All
            </button>
          </div>
        </div>
        {show && tasks.map(task => (
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
