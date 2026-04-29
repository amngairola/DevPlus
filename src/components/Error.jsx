import React from "react";

const Error = ({ error }) => {
  return (
    <div>
      {error?.response?.status === 404 && <p>User not found</p>}
      {error?.response?.status === 403 && (
        <p>Rate limit exceeded. Try later.</p>
      )}
      {error?.response && (
        <p>{error.response.data?.message || "Something went wrong"}</p>
      )}
    </div>
  );
};

export default Error;
