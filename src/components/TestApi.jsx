import React, { useEffect } from "react";
import {
  fetchCommitActivity,
  getRepos,
  getUser,
} from "./../api/githubServices";
import { fetchHeatmap } from "../api/graphql";
import { useGithubUser } from "./../hooks/useGithubUser";
import { useGithubRepos } from "./../hooks/useGithubRepos";
import { useCommitActivity } from "./../hooks/useCommitActivity";

const TestApi = () => {
  useEffect(() => {
    async function test() {
      const heatMap = await fetchHeatmap(username);
      console.log("HEATMAP:", heatMap);
    }
    test();
  }, []);

  const username = "torvalds";
  const { data: user } = useGithubUser(username);

  const { data: repos } = useGithubRepos(username);

  const { data: commits } = useCommitActivity("facebook", "react");

  console.log("USER", user);
  console.log("REPOS", repos);
  console.log("COMMITS", commits);
  return <div>Testing API...</div>;
};

export default TestApi;
