import React, { useEffect, useState } from "react";
import TaskCard from "../../components/TaskCard";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import userAxios from "../../api/UserAxios";
import Loading from "../../components/Loading";

const TaskList = ({ username }) => {
  // const [tasks, setTasks] = useState([
  //   {
  //     _id: "6746d03a801ab42eed05c272",
  //     task_name: "hello",
  //     description:
  //       "sample testing gbsbbevslfewfifihdiisieijhiuwhjninvirihifqihiineqiiaiih ",
  //     reminddate: "2024-10-29T00:00:00.000Z",
  //     start_date: "2024-11-12T00:00:00.000Z",
  //     priority: "High",
  //     status: "Pending",
  //     task_type: "Task",
  //     notes: "Testing notes",
  //     completion_date: "2024-11-04T00:00:00.000Z",
  //     author: "6746ad75ce64de13832fee59",
  //     is_active: true,
  //     created_at: "2024-11-27T07:54:34.234Z",
  //     updated_at: "2024-11-27T07:54:34.234Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "6746d03a801khab42eed05c272",
  //     task_name: "hy",
  //     description: "sample testing",
  //     reminddate: "",
  //     start_date: "",
  //     priority: "Medium",
  //     status: "Complete",
  //     task_type: "Task",
  //     notes: "",
  //     completion_date: "",
  //     author: "6746ad75ce64de13832fee59",
  //     is_active: true,
  //     created_at: "2024-11-27T07:54:34.234Z",
  //     updated_at: "2024-11-27T07:54:34.234Z",
  //     __v: 0,
  //   },
  //   // More tasks...
  // ]);
  const [tasks, setTasks] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchTasks = async () => {
    setloading(true);
    try {
      const response = await userAxios.get("/task");
      console.log(response.data.data);
      setTasks(response?.data?.data);
    } catch (error) {
      setTasks([]);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const [filter, setFilter] = useState({
    priority: "All",
    status: "All",
    task_type: "All",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesPriority =
      filter.priority === "All" || task.priority === filter.priority;
    const matchesStatus =
      filter.status === "All" || task.status === filter.status;
    const matchesTaskType =
      filter.task_type === "All" || task.task_type === filter.task_type;
    const matchesSearchTerm =
      task.task_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());

    return (
      matchesPriority && matchesStatus && matchesTaskType && matchesSearchTerm
    );
  });

  const handleEdit = (taskId) => {
    console.log("Editing task with ID:", taskId);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task._id !== taskId));
  };

  const handleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task._id === taskId ? { ...task, status: "Completed" } : task
      )
    );
  };
  if (loading) return <Loading />;
  return (
    <div className="flex items-center justify-center min-h-screen bg-black py-6 px-4">
      {tasks?.length === 0 ? (
        <Link to={`/${username}/create-task`}>
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-300">
            Create Task
          </button>
        </Link>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full mt-16">
          {/* Search Bar */}

          <div className="mb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search tasks..."
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-500"
            />
          </div>

          {/* Filters */}
          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
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

              <div>
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

              <div>
                <label
                  htmlFor="taskTypeFilter"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Filter by Task Type
                </label>
                <select
                  id="taskTypeFilter"
                  name="task_type"
                  value={filter.task_type}
                  onChange={handleFilterChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                >
                   <option value="All">All</option>
                  <option value="Task">Task</option>
                <option value="Meeting">Meeting</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Task List */}
          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onComplete={handleComplete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
