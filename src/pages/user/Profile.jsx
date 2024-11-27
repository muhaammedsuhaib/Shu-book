import React, { useEffect } from "react";
import { FaPlus, FaEdit, FaTasks, FaCog } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../redux/slices/userSlice";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  if (loading) return <Loading />;

  if (error) {
    return <div className="text-white">{error}</div>;
  }

  return (
    <div className="flex justify-center bg-black py-6 px-4">
      {user ? (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-black">
              Hi {user?.data?.user?.username}
            </h2>
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img
                src='/userprofile.png'
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-black">
              {user?.data?.user?.username}
            </h3>
            <p className="text-gray-600">{user?.data?.user?.email}</p>
          </div>

          <div className="flex justify-center gap-8 mb-12 flex-col sm:flex-row">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-black">
                {user?.data?.user?.tasks?.length}
              </h4>
              <p className="text-gray-500">Total Tasks</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-black">
                {
                  user?.data?.user?.tasks?.filter((task) => task?.completed)
                    .length
                }
              </h4>
              <p className="text-gray-500">Completed Tasks</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-black">
                {
                  user?.data?.user?.tasks?.filter((task) => !task.completed)
                    .length
                }
              </h4>
              <p className="text-gray-500">Pending Tasks</p>
            </div>
          </div>

          <div className="flex justify-around gap-8 mb-8 flex-col sm:flex-row">
            <Link
              to={`/${user?.data?.user?.username}/create-task`}
              className="text-center"
            >
              <button className="flex items-center text-gray-600 hover:text-blue-500">
                <FaPlus className="mr-2" />
                <span>Add New Task</span>
              </button>
            </Link>
            <Link
              to={`/${user?.data?.user?.username}/create-task`}
              className="text-center"
            >
              <button className="flex items-center text-gray-600 hover:text-blue-500">
                <FaEdit className="mr-2" />
                <span>Edit</span>
              </button>
            </Link>
            <Link
              to={`/${user?.data?.user?.username}/task`}
              className="text-center"
            >
              <button className="flex items-center text-gray-600 hover:text-blue-500">
                <FaTasks className="mr-2" />
                <span>View Tasks</span>
              </button>
            </Link>
            <Link
              to={`/${user?.data?.user?.username}/settings`}
              className="text-center"
            >
              <button className="flex items-center text-gray-600 hover:text-blue-500">
                <FaCog className="mr-2" />
                <span>Settings</span>
              </button>
            </Link>
          </div>
        </div>
      ) : (
        "User not found"
      )}
    </div>
  );
};

export default Profile;
