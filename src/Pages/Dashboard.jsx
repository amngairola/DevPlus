import { useHeatMap } from "../hooks/useHeatmap";
import Skeleton from "./../components/Skeleton";
import UserProfile from "./../components/UserProfile";
import { useGithubUser } from "../hooks/useGithubUser";
import { useSearchParams } from "react-router-dom";
import { useGithubRepos } from "./../hooks/useGithubRepos";
import { useCommitActivity } from "./../hooks/useCommitActivity";
import SearchBar from "../components/SearchBar";

import Error from "../components/Error";
import { useEffect } from "react";

const Dashboard = () => {
  const [params, setParams] = useSearchParams();

  const username = params.get("user") || "";

  const { data: user, isLoading, isError, error } = useGithubUser(username);

  const { data: repos } = useGithubRepos(username);
  const { data: heatmap } = useHeatMap(username);

  const { data: commits } = useCommitActivity("facebook", "react");

  useEffect(() => {
    if (user) console.log("USER updated:", user);
  }, [user]);

  useEffect(() => {
    if (repos) console.log("REPOS updated:", repos);
  }, [repos]);

  useEffect(() => {
    if (heatmap) console.log("HEATMAP updated:", heatmap);
  }, [heatmap]);

  const handleSearch = (name) => {
    if (name === username) return;
    setParams({ user: name });
  };

  return (
    <div className="p-6">
      <SearchBar onSearch={handleSearch} initialValue={username} />

      <div className="mt-6">
        {isLoading && <Skeleton />}

        {isError && <Error error={error} />}

        {user && <UserProfile data={user} />}
      </div>
    </div>
  );
};

export default Dashboard;
