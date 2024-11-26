import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FaPen, FaTrash, FaCheck, FaPaperclip, FaTag } from "react-icons/fa"; // New icons
import FormInput from "../../components/FormInput"; // Reusable FormInput component
import Button from "../../components/Button"; // Reusable Button component

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      task_name: "Task 1",
      description: "This is task 1 description",
      due_date: "2024-11-30",
      priority: "High",
      status: "Pending",
      assigned_to: "John Doe",
      tags: "Urgent",
      attachment: null,
      notes: "Review soon",
    },
    {
      task_name: "Task 2",
      description: "This is task 2 description",
      due_date: "2024-12-15",
      priority: "Medium",
      status: "In Progress",
      assigned_to: "Jane Smith",
      tags: "Development",
      attachment: null,
      notes: "In progress",
    },
    // Add more tasks as needed
  ]);

  const [filter, setFilter] = useState({
    priority: "All",
    status: "All",
  });

  const filteredTasks = tasks.filter((task) => {
    const matchPriority = filter.priority === "All" || task.priority === filter.priority;
    const matchStatus = filter.status === "All" || task.status === filter.status;
    return matchPriority && matchStatus;
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleSubmit = (values, { resetForm }) => {
    // Add logic to create a task
    console.log(values);
    resetForm();
  };

  return (
    <div className="flex items-center justify-center bg-black py-6 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full mt-16">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Task <span className="text-gray-600">List</span>
        </h2>

        {/* Filter Section */}
        <div className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="mb-4">
              <label
                htmlFor="priorityFilter"
                className="block text-gray-700 font-medium mb-2"
              >
                Filter by Priority
              </label>
              <select
                id="priorityFilter"
                name="priority"
                value={filter.priority}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-500"
              >
                <option value="All">All</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="statusFilter"
                className="block text-gray-700 font-medium mb-2"
              >
                Filter by Status
              </label>
              <select
                id="statusFilter"
                name="status"
                value={filter.status}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-500"
              >
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {filteredTasks.map((task, index) => (
        <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{task.task_name}</h3>
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
              className={`text-${task.status === "Completed" ? "gray" : "green"}-500 hover:text-${task.status === "Completed" ? "gray" : "green"}-700`}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
