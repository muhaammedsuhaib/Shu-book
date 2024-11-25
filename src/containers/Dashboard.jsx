import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const Dashboard = () => {
  const { name, path } = useParams();

  return (
    <div className="flex min-h-screen items-center">
      <Sidebar path={path} name={name} />

      <div className="flex-1 p-6 bg-white">
        <h1 className="text-3xl font-bold text-gray-900">
          {name ? `Welcome, ${name}` : "Welcome to the Dashboard"}
        </h1>
        <p className="mt-4 text-gray-700">Your main content goes here.</p>
      </div>
    </div>
  );
};

export default Dashboard;
