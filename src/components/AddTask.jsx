import { useState } from 'react';

function AddTask({ onAdd }) {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({ text, day, reminder });
    e.target.reset();
  };

  // Handle Reset
  const handleReset = () => {
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form
      className="add-form"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <div className="form-control">
        <label
          htmlFor="add-task"
          className='required'>Task</label>
        <input
          required
          placeholder='Add Task'
          type="text"
          name="task"
          id="add-task"
          onChange={({ target }) => { setText(target.value); console.log(target.value); }} />
      </div>
      <div className="form-control">
        <label
          htmlFor="add-day-time"
          className='required'>Day & Time</label>
        <input
          required
          placeholder='Add Day & Time' type="text"
          name="day-time"
          id="add-day-time"
          onChange={({ target }) => setDay(target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="add-reminder">Set Reminder</label>
        <input
          type="checkbox"
          name="reminder"
          value="true"
          id="add-reminder"
          onChange={({ target }) => setReminder(target.checked)} />
      </div>

      <button className="btn btn-block">Save Task</button>
    </form>
  );
};
export default AddTask;