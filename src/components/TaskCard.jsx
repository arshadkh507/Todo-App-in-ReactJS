import { useState } from 'react';
import { FaTrash, FaEdit, FaSquare } from 'react-icons/fa';
import "./TaskCard.css";

const TaskCard = ({ task, handleDelete, handleEdit, setTasks }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.name);

  const handleEditChange = (event) => {
    setEditedTask(event.target.value);
  };

  const handleSaveEdit = () => {
    handleEdit(task.id, editedTask);
    setEditing(false);
  };

  const handleCheckBox = (checkboxValue) => {
    const updatedTask = { ...task, completed: checkboxValue.target.checked };
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map(t => (t.id === task.id ? updatedTask : t));
      return updatedTasks;
    });
  };

  return (
    <div className="taskcard">
      <li className={task.completed ? "completed" : "incomplete"}>
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedTask}
              onChange={handleEditChange}
            />
            <button onClick={handleSaveEdit}>Save</button>
          </>
        ) : (
          <>
            <span>{task.name}</span>
            <div className='taskcard-btn-container'>
              <input type='checkbox' onClick={handleCheckBox} className='checkbox' />
              <button onClick={() => setEditing(true)} className='edit'>
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(task.id)} className='delete'>
                <FaTrash />
              </button>
            </div>
          </>
        )}
      </li>
    </div>
  );
};

export default TaskCard;

/* import { useState } from 'react';
import { FaTrash, FaEdit , FaSquare } from 'react-icons/fa';
import "./TaskCard.css";

export const TaskCard = ({ task, handleDelete, handleEdit, setTasks }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.name);

  const handleEditChange = (event) => {
    setEditedTask(event.target.value);
  };

  const handleSaveEdit = () => {
    handleEdit(task.id, editedTask);
    setEditing(false);
  };

  const handleCheckBox = (checkboxValue) => {
    const updatedTask = { ...task, completed: checkboxValue.target.checked };
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map(t => (t.id === task.id ? updatedTask : t));
      return updatedTasks;
    });
  };

  return (
    <div className="taskcard">
      <li className={task.completed ? "completed" : "incomplete"}>
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedTask}
              onChange={handleEditChange}
            />
            <button onClick={handleSaveEdit}>Save</button>
          </>
        ) : (
          <>
            <span>{task.name}</span>
            <div className='taskcard-btn-container'>
            <input type='checkbox' onClick={handleCheckBox}  className='checkbox'/>
              <button onClick={() => setEditing(true)} className='edit'>
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(task.id)} className='delete'>
                <FaTrash />
              </button>
            </div>
          </>
        )}
      </li>
    </div>
  );
};

 */