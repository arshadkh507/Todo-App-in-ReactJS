import { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import "./TaskCard.css";

export const TaskCard = ({ task, handleDelete, handleEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.name);

  const handleEditChange = (event) => {
    setEditedTask(event.target.value);
  };

  const handleSaveEdit = () => {
    handleEdit(task.id, editedTask);
    setEditing(false);
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
            <div>
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

