import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (values) => {
    setLoading(true);
    setError(null);
    dispatch(loginStart());
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        values
      );
      dispatch(loginSuccess(response.data.data.token));
      toast.success(response.data.message || "Login successful");
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Unknown error");
      toast.error(err.response?.data?.message || "Login failed");
      dispatch(loginFailure("Invalid email or password"));
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
