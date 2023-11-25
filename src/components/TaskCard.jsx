
const TaskCard = ({task, handleDelete, info}) => {
    const {id , name , completed} =  task
  return (
    <>
      <li className={completed ? "completed" : "incompleted"}>
        <span>
          {id}-{name}-{info}
        </span>
        <span onClick={() => handleDelete(id)}>delete</span>
      </li>
    </>
  );
};

export default TaskCard;
