import Task from './Task';

import PropTypes from 'prop-types';

function Tasks({ tasks, onDelete, onToggle }) {
  return (
    <>
      {tasks.map((task) =>
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle} />
      )}
    </>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      day: PropTypes.string.isRequired,
      reminder: PropTypes.bool.isRequired,
    })).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Tasks;