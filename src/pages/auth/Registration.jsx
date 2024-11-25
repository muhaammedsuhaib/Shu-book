import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";

const Registration = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .max(15, "Username must be 15 characters or less")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log("Registration data:", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black overflow-auto">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Register to <span className="text-gray-600">ToDoListify</span>
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <FormInput
                label="Username"
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                className="mb-4"
              />
              <FormInput
                label="Email"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="mb-4"
              />
              <FormInput
                label="Password"
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="mb-6"
              />

              <Button
                type="submit"
                text="Register"
                className="w-full bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-500"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
