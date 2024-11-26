import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "../../components/FormInput"; // Reusable FormInput component
import Button from "../../components/Button"; // Reusable Button component

const TaskForm = () => {
  const initialValues = {
    task_name: "",
    description: "",
    due_date: "",
    start_date: "",
    estimated_time: "",
    priority: "Medium", // Default priority
    status: "Pending", // Default status
    assigned_to: "",
    assignee_role: "", // Added assignee role
    tags: "",
    attachment: null,
    notes: "",
    completion_date: "", // Added completion date
  };

  const validationSchema = Yup.object({
    task_name: Yup.string()
      .min(3, "Task name must be at least 3 characters")
      .required("Task name is required"),
    description: Yup.string()
      .min(10, "Description must be at least 10 characters")
      .required("Description is required"),
    due_date: Yup.date()
      .min(new Date(), "Due date cannot be in the past")
      .required("Due date is required"),
    start_date: Yup.date()
      .required("Start date is required"),
    estimated_time: Yup.number()
      .min(0, "Estimated time must be a positive number")
      .required("Estimated time is required"),
    priority: Yup.string()
      .oneOf(["High", "Medium", "Low"], "Invalid priority level")
      .required("Priority is required"),
    status: Yup.string()
      .oneOf(["Pending", "In Progress", "Completed"], "Invalid status")
      .required("Status is required"),
    assigned_to: Yup.string().required("Assigned person is required"),
    assignee_role: Yup.string().required("Assignee role is required"),
    tags: Yup.string().optional(),
    attachment: Yup.mixed().nullable().optional(),
    notes: Yup.string().optional(),
    completion_date: Yup.date().optional(),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm(); // Reset form after submission
  };

  return (
    <div className="flex items-center justify-center bg-black py-6 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full mt-16">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Create <span className="text-gray-600">Task</span>
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              {/* Task Name */}
              <FormInput
                label="Task Name"
                id="task_name"
                name="task_name"
                type="text"
                placeholder="Enter task name"
                className="mb-4"
              />

              {/* Description (Textarea with perfect responsiveness) */}
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter task description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none min-h-[150px] max-h-[300px] placeholder-gray-400"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Provide a detailed description of the task.
                </p>
              </div>

              {/* Input fields in one line */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <FormInput
                  label="Due Date"
                  id="due_date"
                  name="due_date"
                  type="date"
                />
                <FormInput
                  label="Start Date"
                  id="start_date"
                  name="start_date"
                  type="date"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <FormInput
                  label="Estimated Time (in hours)"
                  id="estimated_time"
                  name="estimated_time"
                  type="number"
                  placeholder="Enter estimated time"
                />
                <div className="mb-4">
                  <label
                    htmlFor="priority"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Priority
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <FormInput
                  label="Assigned To"
                  id="assigned_to"
                  name="assigned_to"
                  type="text"
                  placeholder="Enter the assignee's name"
                />
                <div className="mb-4">
                  <label
                    htmlFor="assignee_role"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Assignee Role
                  </label>
                  <select
                    id="assignee_role"
                    name="assignee_role"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                  >
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                  </select>
                </div>
              </div>

              {/* Attachment */}
              <div className="mb-4">
                <label
                  htmlFor="attachment"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Attachment (Optional)
                </label>
                <input
                  id="attachment"
                  name="attachment"
                  type="file"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                  onChange={(event) => setFieldValue("attachment", event.target.files[0])}
                />
              </div>

              {/* Completion Date */}
              <FormInput
                label="Completion Date (Optional)"
                id="completion_date"
                name="completion_date"
                type="date"
                className="mb-4"
              />

              {/* Notes */}
              <FormInput
                label="Notes (Optional)"
                id="notes"
                name="notes"
                type="textarea"
                placeholder="Enter any additional notes"
                className="mb-6"
              />

              {/* Submit Button */}
              <Button
                disabled={isSubmitting}
                type="submit"
                text={isSubmitting ? "Creating Task..." : "Create Task"}
                className="w-full bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-500"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default TaskForm;
