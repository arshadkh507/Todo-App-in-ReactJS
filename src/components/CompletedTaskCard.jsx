// CompletedTaskCard Component
import { FaSquare, FaTrash } from "react-icons/fa";
import { useState } from "react";
import "./CompletedTaskCard.css";

const CompletedTaskCard = ({ task, handleDelete, setTasks }) => {
    const [isChecked, setIsChecked] = useState(true);
  
    const handleCheckBox = () => {
      const updatedTask = { ...task, completed: !isChecked };
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((t) =>
          t.id === task.id ? updatedTask : t
        );
        return updatedTasks;
      });
      setIsChecked(!isChecked);
    };
  
    return (
      <div className="completed-task-card">
        <li className="completed">
          <span>{task.name}</span>
          <div className="completed-task-card-btn-container">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckBox}
              className="checkbox"
            />
            <button onClick={() => handleDelete(task.id)} className="delete">
              <FaTrash />
            </button>
          </div>
        </li>
      </div>
    );
  };
  

export default CompletedTaskCard;
