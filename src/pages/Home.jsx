import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserProfile } from "../redux/slices/userSlice";
import Loading from "../components/Loading";
const Home = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  let username = user?.data?.user?.user?.username || null;

  if (loading) return <Loading />;
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-white">
          Welcome to <span className="text-gray-300">ToDoListify</span>
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Your ultimate task management solution for productivity and success.
        </p>
        <Link to={username ? `/${username}` : "/login"}>
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
