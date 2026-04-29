import React, { useState } from "react";

const ProfileCard = ({ user, repos }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = `${window.location.origin}?user=${user.login}`;

    navigator.clipboard.writeText(url);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  console.log(user); // full user object
  console.log(repos); // repo array
  return (
    <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-xl space-y-4">
      {/* Top Section */}
      <div className="flex items-center gap-4">
        <img
          src={user.avatar_url}
          alt="avatar"
          className="w-20 h-20 rounded-full"
        />

        <div>
          <h2
            className="text-xl font-bold cursor-pointer hover:underline"
            onClick={handleCopy}
          >
            {user.name || user.login}
          </h2>

          <p className="text-gray-400">@{user.login}</p>

          {copied && <p className="text-green-400 text-sm">Copied!</p>}
        </div>
      </div>

      {/* Bio */}
      {user.bio && <p className="text-gray-300">{user.bio}</p>}

      {/* Extra info */}
      <div className="text-sm text-gray-400 space-y-1">
        {user.location && <p>📍 {user.location}</p>}
        {user.blog && (
          <a href={user.blog} target="_blank" className="text-blue-400">
            {user.blog}
          </a>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Stat label="Repos" value={user.public_repos} />
        <Stat label="Followers" value={user.followers} />
        <Stat label="Following" value={user.following} />
        <Stat label="Created" value={new Date(user.created_at).getFullYear()} />
      </div>
    </div>
  );
};

function Stat({ label, value }) {
  return (
    <div className="bg-gray-800 p-3 rounded-xl text-center">
      <p className="text-lg font-bold">{value}</p>
      <p className="text-xs text-gray-400">{label}</p>
    </div>
  );
}

export default ProfileCard;
