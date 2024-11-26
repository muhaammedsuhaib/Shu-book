import React from "react";
import {
  FaPen,
  FaKey,
  FaBell,
  FaSignOutAlt,
  FaInfoCircle,
} from "react-icons/fa";

const Settings = () => {
  const handleProfileUpdate = (values) => {};

  const handleNotificationToggle = () => {};

  const handleLogout = () => {};

  const handleChangePassword = () => {
    alert("Change Password functionality triggered!");
  };

  return (
    <div className="flex justify-center bg-black py-6 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-black">Settings</h2>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-semibold text-black mb-4">
            Profile Settings
          </h4>
          <button className="flex items-center text-gray-600 hover:text-blue-500 mb-4">
            <FaPen className="mr-2" />
            <span>Edit Profile</span>
          </button>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-semibold text-black mb-4">
            Notification Settings
          </h4>
          <button
            className="flex items-center text-gray-600 hover:text-blue-500"
            onClick={handleNotificationToggle}
          >
            <FaBell className="mr-2" />
            <span>Enable Notifications</span>
          </button>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-semibold text-black mb-4">
            Change Password
          </h4>
          <button
            className="flex items-center text-gray-600 hover:text-blue-500"
            onClick={handleChangePassword}
          >
            <FaKey className="mr-2" />
            <span>Change Password</span>
          </button>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-semibold text-black mb-4">
            About Account
          </h4>
          <button className="flex items-center text-gray-600 hover:text-blue-500">
            <FaInfoCircle className="mr-2" />
            <span>About This Account</span>
          </button>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-black mb-4">Logout</h4>
          <button
            className="flex items-center text-gray-600 hover:text-red-500"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
