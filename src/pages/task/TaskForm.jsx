import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import Loading from "../../components/Loading";
import userAxios from "../../api/UserAxios";
import toast from "react-hot-toast";
const TaskForm = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    task_name: "",
    description: "",
    reminddate: "",
    start_date: "",
    priority: "Medium",
    status: "Pending",
    task_type: "Task",
    notes: "",
    completion_date: "",
  };

  const validationSchema = Yup.object({
    task_name: Yup.string()
      .min(3, "Task name must be at least 3 characters")
      .required("Task name is required"),
    description: Yup.string()
      .min(10, "Description must be at least 10 characters")
      .required("Description is required"),
    reminddate: Yup.date()
      .min(new Date(), "Reminder date cannot be in the past")
      .required("Reminder date is required"),
    start_date: Yup.date()
      .max(new Date(), "Start date cannot be in the future")
      .required("Start date is required"),
    priority: Yup.string()
      .oneOf(["High", "Medium", "Low"], "Invalid priority level")
      .required("Priority is required"),
    status: Yup.string()
      .oneOf(["Pending", "In Progress", "Completed"], "Invalid status")
      .required("Status is required"),
    task_type: Yup.string().required("Task type is required"),
    notes: Yup.string().optional(),
    completion_date: Yup.date()
      .min(new Date(), "Completion date cannot be in the past")
      .optional(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    try {
      const response = await userAxios.post("/task", values);
      toast.success(response.data.message || "Task created successfully");
      resetForm();
    } catch (error) {
      toast.error(error.response?.data?.message || "Task created failed");
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <Loading />;
  return (
    <div className="flex items-center justify-center min-h-screen bg-black py-6 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full mt-16">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Create <span className="text-gray-600">Task</span>
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {/* Task Name */}
            <div className="mb-4">
              <FormInput
                label="Task Name"
                id="task_name"
                name="task_name"
                type="text"
                placeholder="Enter task name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-gray-700 font-medium mb-2"
              >
                Description
              </label>
              <Field
                id="description"
                name="description"
                as="textarea"
                placeholder="Enter task description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none min-h-[150px] max-h-[300px] placeholder-gray-400"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Reminder Date */}
              <div className="mb-4">
                <FormInput
                  label="Reminder Date"
                  id="reminddate"
                  name="reminddate"
                  type="date"
                  placeholder=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              {/* Start Date */}
              <div className="mb-4">
                <FormInput
                  label="Start Date"
                  id="start_date"
                  name="start_date"
                  type="date"
                  placeholder=""
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </div>

            {/* Priority */}
            <div className="mb-4">
              <label
                htmlFor="priority"
                className="block text-gray-700 font-medium mb-2"
              >
                Priority
              </label>
              <Field
                id="priority"
                name="priority"
                as="select"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </Field>
              <ErrorMessage
                name="priority"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Task Type */}
            <div className="mb-4">
              <label
                htmlFor="task_type"
                className="block text-gray-700 font-medium mb-2"
              >
                Task Type
              </label>
              <Field
                id="task_type"
                name="task_type"
                as="select"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <option value="Task">Task</option>
                <option value="Meeting">Meeting</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
              </Field>
              <ErrorMessage
                name="task_type"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Optional Completion Date */}
            <div className="mb-4">
              <FormInput
                label="Completion Date (Optional)"
                id="completion_date"
                name="completion_date"
                type="date"
                placeholder=""
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            {/* Notes */}
            <div className="mb-6">
              <label
                htmlFor="notes"
                className="block text-gray-700 font-medium mb-2"
              >
                Notes (Optional)
              </label>
              <Field
                id="notes"
                name="notes"
                as="textarea"
                placeholder="Enter any additional notes"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none min-h-[150px] max-h-[300px] placeholder-gray-400"
              />
            </div>

            {/* Submit Button */}
            <Button
              disabled={loading}
              type="submit"
              text={loading ? "Creating..." : "Create Task"}
              className="w-full bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-500"
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default TaskForm;
