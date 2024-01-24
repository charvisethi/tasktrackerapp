import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete, onToggleStatus }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <div>
            <strong>{task.title}</strong> - {task.description} ({task.status})
          </div>
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={() => onToggleStatus(task)}>Toggle Status</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
