import React from "react";

const Skeleton = () => {
  return (
    <div className="bg-gray-800 rounded-2xl p-5 animate-pulse space-y-4">
      <div className="h-16 w-16 bg-gray-700 rounded-full"></div>
      <div className="h-4 w-1/2 bg-gray-700 rounded"></div>
      <div className="h-4 w-1/3 bg-gray-700 rounded"></div>
    </div>
  );
};

export default Skeleton;
