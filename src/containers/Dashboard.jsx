import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TaskForm from "../pages/task/TaskForm";
import TaskList from "../pages/task/TaskList";
import Profile from "../pages/user/Profile";
import Settings from "../pages/user/Settings";
import Welcome from "../pages/Welcome";
const Dashboard = () => {
  const { name, path } = useParams();
  let content;

  // Dynamically load the content based on the 'path'
  switch (path) {
    case "create-task":
      content = <TaskForm />;
      break;
    case "task":
      content = <TaskList />;
      break;
    case "profile":
      content = <Profile />;
      break;
    case "settings":
      content = <Settings />;
      break;
    default:
      content = <Welcome username={name} />;
      break;
  }

  return (
    <div className="flex min-h-screen items-center">
      <Sidebar path={path} name={name} />
<div className="w-screen h-screen overflow-auto">
{content}
</div>
    </div>
  );
};

export default Dashboard;
