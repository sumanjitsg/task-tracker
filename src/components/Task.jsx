import { FaTimes } from 'react-icons/fa';

function Task({ task }) {
  return (
    <div className={`task ${task.reminder && 'reminder'}`} >
      <h3>
        {task.text}
        <FaTimes />
      </h3>
      <p>{task.day}</p>
    </div >
  );
}
export default Task;