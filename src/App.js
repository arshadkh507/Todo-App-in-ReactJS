import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";
import "./App.css";
import CompletedTasks from "./components/CompletedTasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'arshad',
      completed: false,
    }
  ]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Header />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
        <CompletedTasks completedTasks={tasks.filter(task => task.completed)} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
















/* import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";
import "./App.css";
import CompletedTasks from "./components/CompletedTasks";
import AddTask from "./components/AddTask";

function App() {

  const [remainingTasks, setRemainingTasks] = useState([
    {
      id: 1,
      name: 'arshad',
      completed: false,
    }
  ]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const setTasks = (newTasks) => {
    console.log(newTasks)
    if (!Array.isArray(newTasks)) {
      return;
    }

    const updatedRemainingTasks = newTasks.filter(task => !task.completed);
    const updatedCompletedTasks = newTasks.filter(task => task.completed);

    setRemainingTasks(updatedRemainingTasks);
    setCompletedTasks(updatedCompletedTasks);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(remainingTasks.concat(completedTasks)));
  }, [remainingTasks, completedTasks]);

  return (
    <div className="App">
      <Header />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <main>
        <AddTask setTasks={setTasks} />
        <TaskList tasks={remainingTasks} setTasks={setTasks} />
        {completedTasks.length > 0 && <CompletedTasks completedTasks={completedTasks} setTasks={setTasks} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

 */