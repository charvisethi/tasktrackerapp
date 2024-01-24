// TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, initialTask }) => {
  const [task, setTask] = useState(initialTask);

  useEffect(() => {
    setTask(initialTask);
  }, [initialTask]);

  const handleInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask(initialTask);
  };

  return (
    <div>
      <h2>Add/Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={task.title} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={task.description} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select id="status" name="status" value={task.status} onChange={handleInputChange}>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
