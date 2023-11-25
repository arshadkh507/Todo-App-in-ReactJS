import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { TaskCard } from './TaskCard';
import "./TaskList.css";
import { useState } from 'react';

export const TaskList = ({ tasks, setTasks }) => {
  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function handleEdit(id, updatedTask) {
    setTasks(tasks.map(task => (task.id === id ? { ...task, name: updatedTask } : task)));
  }

  return (
    <section className='tasklist'>
      <ul>
        <div className='header'>
          <h1>TaskList</h1>
          <div>
            <button className='trigger' onClick={() => setShow(!show)}>
              {show ? <BsEyeSlash /> : <BsEye />}
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
          />
        ))}
      </ul>
    </section>
  );
};




// import { useState } from 'react';
// import { TaskCard } from './TaskCard';
// import { BsEye ,BsEyeSlash } from 'react-icons/bs';

// import "./TaskList.css";
// import "./AddTask.css";


// export const TaskList = ({tasks , setTasks}) => {
  
//     const [show, setShow] = useState(true);

//     function handleDelete(id){
//         setTasks(tasks.filter(task => task.id !== id));
//     }

//   return (
//     <section className='tasklist'>
//         <ul>
//             <div className='header'>
//                 <h1>TaskList</h1>
//                <div>
//                <button className='trigger' onClick={() => setShow(!show)}>{ show ? <BsEyeSlash/> : <BsEye/>}</button>
//                 <button className='clear' onClick={() => setShow(!show)}>Clear All</button>
//                </div>
//             </div>
//             { show && tasks.map((task) => (
//                 <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
//             )) }
//         </ul>
//     </section>
//   )
// }