
const TaskCard = ({task, handleDelete}) => {
    const {id , name , completed} =  task
  return (
    <>
      <li className={completed ? "completed" : "incompleted"}>
        <span>
          {id}-{name}
        </span>
        <span onClick={() => handleDelete(id)}>delete</span>
      </li>
    </>
  );
};

export default TaskCard;
