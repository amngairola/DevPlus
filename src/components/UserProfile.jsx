import React from "react";

const UserProfile = ({ data }) => {
  return (
    <div>
      <h2 className="text-xl">{data.login}</h2>
      <img src={data.avatar_url} className="w-16 rounded-full" />
    </div>
  );
};

export default UserProfile;
