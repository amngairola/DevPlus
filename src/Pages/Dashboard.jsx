import { useHeatMap } from "../hooks/useHeatmap";
import Skeleton from "./../components/Skeleton";
import UserProfile from "./../components/UserProfile";
import { useGithubUser } from "../hooks/useGithubUser";
import { useSearchParams } from "react-router-dom";
import { useGithubRepos } from "./../hooks/useGithubRepos";
import { useCommitActivity } from "./../hooks/useCommitActivity";
import SearchBar from "../components/SearchBar";
import Error from "../components/Error";
import { Suspense, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import LanguageChart from "../components/LanguageChart";

import LanguageChartSkeleton from "../components/LanguageChartSkeleton";

const Dashboard = () => {
  const [params, setParams] = useSearchParams();

  const username = params.get("user") || "react";

  const { data, isLoading, isError, error } = useGithubUser(username);

  const { data: heatmap } = useHeatMap(username);

  const { data: commits } = useCommitActivity("facebook", "react");

  useEffect(() => {
    if (data) console.log("USER updated:", data);
  }, [data]);

  useEffect(() => {
    if (heatmap) console.log("HEATMAP updated:", heatmap);
  }, [heatmap]);

  const handleSearch = (name) => {
    if (name === username) return;
    setParams({ user: name });
  };
  console.log("FULL DATA:", data);
  console.log("USER:", data?.user);
  console.log("USERNAME:", username);
  console.log("isError:", isError, error);
  return (
    <div className="p-6">
      <SearchBar onSearch={handleSearch} initialValue={username} />

      <div className="mt-6">
        {isLoading && <Skeleton />}

        {isError && <Error error={error} />}
        <Suspense fallback={<Skeleton />}>
          {data && <ProfileCard user={data.user} repos={data.repos} />}
        </Suspense>

        {data.repos && <LanguageChart repos={data.repos} />}
        {!data.repos && <LanguageChartSkeleton />}
      </div>
    </div>
  );
};

export default Dashboard;
