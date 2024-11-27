import React from "react";
import {
  FaTasks,
  FaBell,
  FaClock,
  FaCalendarAlt,
  FaClipboardList,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Welcome = ({ username }) => {
  const features = [
    {
      icon: <FaTasks className="text-5xl text-white mb-4 animate-bounce" />,
      title: "Create Tasks",
      description: "Organize your work and personal tasks efficiently.",
    },
    {
      icon: <FaClock className="text-5xl text-white mb-4 animate-bounce" />,
      title: "Set Deadlines",
      description: "Assign deadlines to ensure timely completion.",
    },
    {
      icon: <FaBell className="text-5xl text-white mb-4 animate-bounce" />,
      title: "Reminders",
      description: "Get timely reminders for upcoming tasks.",
    },
    {
      icon: (
        <FaCalendarAlt className="text-5xl text-white mb-4 animate-bounce" />
      ),
      title: "Daily Planner",
      description: "Plan your day with a visual task calendar.",
    },
    {
      icon: (
        <FaClipboardList className="text-5xl text-white mb-4 animate-bounce" />
      ),
      title: "Track Progress",
      description: "Monitor your productivity with task status updates.",
    },
    {
      icon: (
        <FaCheckCircle className="text-5xl text-white mb-4 animate-bounce" />
      ),
      title: "Mark Complete",
      description: "Tick off completed tasks and feel accomplished.",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-black py-8 px-4 mt-8">
      <div className="bg-black text-white shadow-lg rounded-lg p-8 w-full max-w-3xl text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome{username ? `, ${username}` : ""} to ToDoListify!
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Your all-in-one task management app. Stay organized and boost
          productivity effortlessly.
        </p>
        <Link
          to={`/${username}/create-task`}
          className="rounded-md px-6 py-3 text-lg font-semibold shadow-lg transition-colors bg-white text-black hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-400 hover:scale-105"
          aria-label="Get started by adding a task"
        >
          Get Started
        </Link>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-800 text-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm text-center mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Welcome;
