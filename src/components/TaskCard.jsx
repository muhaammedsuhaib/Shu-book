import React from "react";
import { FaCheck, FaPen, FaTag, FaTrash } from "react-icons/fa";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {task.task_name}
        </h3>
        <div className="flex space-x-3">
          <button
            className="text-blue-500 hover:text-blue-700"
            aria-label="Edit Task"
            onClick={() => handleEdit(task.id)}
          >
            <FaPen />
          </button>
          <button
            className="text-red-500 hover:text-red-700"
            aria-label="Delete Task"
            onClick={() => handleDelete(task.id)}
          >
            <FaTrash />
          </button>
          <button
            className={`text-${
              task.status === "Completed" ? "gray" : "green"
            }-500 hover:text-${
              task.status === "Completed" ? "gray" : "green"
            }-700`}
            aria-label="Mark Task as Completed"
            onClick={() => handleComplete(task.id)}
            disabled={task.status === "Completed"}
          >
            <FaCheck />
          </button>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{task.description}</p>

      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>Due: {task.due_date}</span>
        <span>Priority: {task.priority}</span>
        <span>Status: {task.status}</span>
      </div>

      <div className="mb-4">
        <strong>Assigned To:</strong> {task.assigned_to}
      </div>

      {task.tags && (
        <div className="mb-4 flex items-center">
          <FaTag className="mr-2 text-yellow-500" />
          <span>{task.tags}</span>
        </div>
      )}

      {task.notes && (
        <div className="mb-4">
          <strong>Notes:</strong> {task.notes}
        </div>
      )}

      {task.attachment && (
        <div className="mb-4 flex items-center">
          <FaPaperclip className="mr-2 text-gray-500" />
          <span>{task.attachment}</span>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
