import React, { useState } from "react";
import { FaPlus, FaEdit, FaTasks, FaCog } from "react-icons/fa";
import Button from "../../components/Button";

const UserProfile = () => {

  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    profileImg:
      "https://media.licdn.com/dms/image/v2/D4E03AQEb4171e-u7GQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712289909972?e=1738195200&v=beta&t=WnWDiTeazcbT3B9SBIlHm5SGUHaDePNsykDu0gza4Mc", // Replace with actual image path
    tasks: [
      { id: 1, title: "Task 1", completed: true },
      { id: 2, title: "Task 2", completed: false },
      { id: 3, title: "Task 3", completed: false },
    ],
  });

  return (
    <div className="flex justify-center bg-black py-6 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-black">Hi {user.name}</h2>
        </div>
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img
              src={user.profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-black">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
        </div>

        <div className="flex justify-center gap-8 mb-12 flex-col sm:flex-row">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-black">
              {user.tasks.length}
            </h4>
            <p className="text-gray-500">Total Tasks</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-black">
              {user.tasks.filter((task) => task.completed).length}
            </h4>
            <p className="text-gray-500">Completed Tasks</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold text-black">
              {user.tasks.filter((task) => !task.completed).length}
            </h4>
            <p className="text-gray-500">Pending Tasks</p>
          </div>
        </div>

        <div className="flex justify-around gap-8 mb-8 flex-col sm:flex-row">
          <div className="text-center">
            <button className="flex items-center text-gray-600 hover:text-blue-500">
              <FaPlus className="mr-2" />
              <span>Add New Task</span>
            </button>
          </div>
          <div className="text-center">
            <button className="flex items-center text-gray-600 hover:text-blue-500">
              <FaEdit className="mr-2" />
              <span>Edit</span>
            </button>
          </div>
          <div className="text-center">
            <button className="flex items-center text-gray-600 hover:text-blue-500">
              <FaTasks className="mr-2" />
              <span>View Tasks</span>
            </button>
          </div>
          <div className="text-center">
            <button className="flex items-center text-gray-600 hover:text-blue-500">
              <FaCog className="mr-2" />
              <span>Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
