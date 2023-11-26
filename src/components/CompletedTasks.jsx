import { FaSquare } from 'react-icons/fa';
import { TaskCard } from "./TaskCard";
import "./CompletedTasks.css";

const CompletedTasks = ({ completedTasks, setTasks }) => {
  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  const handleEdit = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map(task => (task.id === id ? { ...task, name: updatedTask } : task))
    );
  };

  return (
    <div className='completed-tasks'>
      <h1>Completed Tasks</h1>
      {completedTasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
};

export default CompletedTasks;



/* import { TaskCard } from "./TaskCard";

const CompletedTasks = ({ completedTasks, setTasks }) => {
  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  const handleEdit = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map(task => (task.id === id ? { ...task, name: updatedTask } : task))
    );
  };

  return (
    <div className='completed-tasks'>
      <h1>Completed Tasks</h1>
      {completedTasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
};

export default CompletedTasks;
 */