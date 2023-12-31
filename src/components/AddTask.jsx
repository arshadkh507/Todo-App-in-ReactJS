import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddTask.css";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ tasks, setTasks }) => {
  const [taskvalue, setTaskvalue] = useState("");
  const [progress, setProgress] = useState(false);
  const taskRef = useRef("");

  const handleChange = (event) => {
    setTaskvalue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskvalue.trim()) {
      toast.error("Task name cannot be empty! Please enter a task name.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const taskId = uuidv4();

    const task = {
      id: taskId,
      name: taskvalue,
      completed: Boolean(progress),
    };
    setTasks((prevTasks) => [task, ...prevTasks]);
    handleReset();
    setProgress(false);

    toast.success("Task added successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleReset = () => {
    setTaskvalue("");
    setProgress(false);
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          onChange={handleChange}
          value={taskvalue}
        />
        <select
          onChange={(e) => setProgress(e.target.value)}
          value={progress}
          ref={taskRef}
        >
          <option value="false">
           Pending
          </option>
          <option value="true">
            Completed
          </option>
        </select>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
        <button type="submit">
          <FaPlus />
        </button>
      </form>
      <p>{taskvalue.length}</p>
    </section>
  );
};

export default AddTask;

