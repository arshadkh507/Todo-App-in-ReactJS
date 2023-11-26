import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import  TaskList  from "./components/TaskList";
import "./App.css";
import AddTask from "./components/AddTask";
import CompletedTasks from "./components/CompletedTasks";

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
        {tasks.some(task => task.completed) && <CompletedTasks completedTasks={tasks.filter(task => task.completed)} setTasks={setTasks} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
