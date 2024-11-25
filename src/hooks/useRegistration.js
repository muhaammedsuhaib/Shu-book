import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  registrationStart,
  registrationSuccess,
  registrationFailure,
} from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import authAxios from "../api/authAxios";

const useRegistration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const registration = async (values) => {
    setLoading(true);
    setError(null);
    dispatch(registrationStart());
    try {
      const response = await authAxios.post("/register", values);
      console.log(response.data.data.token);

      dispatch(registrationSuccess(response.data.data.token));
      toast.success(response.data.message || "Registration successful");
      navigate(`/${response.data.data.user.username}`);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      toast.error(err.response?.data?.message || "Registration failed");
      dispatch(
        registrationFailure(
          err.response?.data?.message || "Registration failed"
        )
      );
    } finally {
      setLoading(false);
    }
  };

  return { registration, loading, error };
};

export default useRegistration;
