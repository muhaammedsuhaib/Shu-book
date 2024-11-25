import React from "react";

const TaskCard = ({ task, onDelete, onUpdateStatus }) => {
  const handleStatusChange = (status) => {
    onUpdateStatus(task._id, status);
  };

  return (
    <div className="task-card border p-4 mb-4">
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <p>Assigned User: {task.user}</p>
      <div>
        {/* Buttons to update task status */}
        <button
          className="btn-status"
          onClick={() => handleStatusChange("In Progress")}
        >
          Mark as In Progress
        </button>
        <button
          className="btn-status"
          onClick={() => handleStatusChange("Completed")}
        >
          Mark as Completed
        </button>
        <button className="btn-delete" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
