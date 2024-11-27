import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TaskForm from "../pages/task/TaskForm";
import TaskList from "../pages/task/TaskList";
import Profile from "../pages/user/Profile";
import Settings from "../pages/user/Settings";
import Welcome from "../pages/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../redux/slices/userSlice";
const Dashboard = () => {
  const { name, path } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);
  console.log(error);

  var username = user?.data?.user?.username || null;

  let content;

  switch (path) {
    case "create-task":
      content = <TaskForm />;
      break;
    case "task":
      content = <TaskList username={username} />;
      break;
    case "profile":
      content = <Profile />;
      break;
    case "settings":
      content = <Settings />;
      break;
    default:
      content = <Welcome username={username} />;
      break;
  }

  useEffect(() => {
    const validPaths = ["create-task", "task", "profile", "settings"];
    const defaultPath = validPaths.includes(path) ? path : "home";

    if (!loading && user && username) {
      if (!validPaths.includes(path)) {
        navigate(`/${username}/home`);
      } else {
        navigate(`/${username}/${path}`);
      }
    }
  }, [user, loading, navigate, path, username]);

  return (
    <div className="flex min-h-screen items-center bg-black">
      <Sidebar path={path} name={name} />
      <div className="w-screen h-screen overflow-auto">{content}</div>
    </div>
  );
};

export default Dashboard;
