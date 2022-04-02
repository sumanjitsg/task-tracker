import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} /> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
