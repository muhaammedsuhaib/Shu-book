import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-90 p-4">
      <div className="flex flex-col items-center justify-center p-6  rounded-xl space-y-6">
        <div className="animate-spin inline-block w-16 h-16 border-4 border-solid border-white border-t-transparent rounded-full">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="text-lg font-semibold text-white animate-pulse">
        Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;