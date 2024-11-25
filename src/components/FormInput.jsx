import React from 'react';
import { Field, ErrorMessage } from 'formik';

const FormInput = ({ label, id, name, type, placeholder }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-medium">
        {label}
      </label>
      <Field
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default FormInput;
