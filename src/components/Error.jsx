import React from "react";

const Error = ({ error }) => {
  return (
    <div>
      {error?.response?.status === 404 && <p>User not found</p>}
      {error?.response?.status === 403 && (
        <p>Rate limit exceeded. Try later.</p>
      )}
      {!error?.response && <p>Network error. Check internet.</p>}
    </div>
  );
};

export default Error;
