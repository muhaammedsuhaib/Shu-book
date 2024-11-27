import React, { useState } from "react";
import { PiUsersThreeBold } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import { SiGoogletasks } from "react-icons/si";
import { FaTasks } from "react-icons/fa";
import { FaCalendarAlt, FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";

const TaskCard = ({ task, onSelect, onEdit, onDelete, onComplete }) => {
  const [showMore, setShowMore] = useState(false);

  const formatDate = (date) => {
    return date
      ? new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";
  };

  const iconMap = {
    Meeting: <PiUsersThreeBold />,
    Work: <MdWork />,
    Task: <SiGoogletasks />,
  };

  return (
    <div
      className="bg-white shadow-md border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onSelect(task._id)}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold text-gray-800">
          {task.task_name}
        </h4>
        <span
          className={`px-3 py-1 text-sm font-medium rounded-full ${
            task.status === "Completed"
              ? "bg-green-100 text-green-600"
              : task.status === "In Progress"
              ? "bg-blue-100 text-blue-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {task.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{task.description}</p>

      {task.notes && (
        <div className="mb-4">
          <span className="text-gray-800 font-medium">Notes: </span>
          <span>{task.notes || "No notes available"}</span>
        </div>
      )}
      {task.task_type && (
        <div className="mb-3">{iconMap[task.task_type] || <FaTasks />}</div>
      )}

      {/* Conditionally Rendered Details */}
      {showMore && (
        <div className="text-sm text-gray-500 space-y-2">
          <div className="flex items-center">
            <FaCalendarAlt className="text-gray-400 mr-2" />
            <span>
              Created:{" "}
              {new Date(task.created_at).toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </span>
          </div>
          {task.start_date && (
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-400 mr-2" />
              <span>Start: {formatDate(task.start_date)}</span>
            </div>
          )}

          {task.reminddate && (
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-400 mr-2" />
              <span>Reminder: {formatDate(task.reminddate)}</span>
              {new Date(task.reminddate) < new Date() && (
                <FaCheckCircle className="inline-block ml-1 text-green-400" />
              )}
            </div>
          )}
          {task.completion_date && (
            <div className="flex items-center">
              <FaCalendarAlt className="text-gray-400 mr-2" />
              <span>Completion: {formatDate(task.completion_date)}</span>
            </div>
          )}
        </div>
      )}

      {/* Show More/Less Button */}
      <button
        className="text-blue-500 hover:text-blue-700 underline text-sm mt-4 block"
        onClick={(e) => {
          e.stopPropagation();
          setShowMore((prev) => !prev);
        }}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>

      {/* Priority */}
      <div className="mt-4">
        <span
          className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
            task.priority === "High"
              ? "bg-red-100 text-red-600"
              : task.priority === "Medium"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-blue-100 text-blue-600"
          }`}
        >
          Priority: {task.priority}
        </span>
      </div>

      {/* Actions */}
      <div className="mt-6 flex justify-between">
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(task._id);
          }}
        >
          <FaEdit className="inline-block mr-1" /> Edit
        </button>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(task._id);
          }}
        >
          <FaTrash className="inline-block mr-1" /> Delete
        </button>
        <button
          className={`${
            task.status === "Completed"
              ? "text-gray-300 cursor-not-allowed"
              : "text-green-500 hover:text-green-700"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onComplete(task._id);
          }}
          disabled={task.status === "Completed"}
        >
          <FaCheckCircle className="inline-block mr-1" /> Complete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
