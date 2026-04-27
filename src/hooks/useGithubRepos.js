import { useQuery } from "@tanstack/react-query";
import githubApi from "../api/github";

export const useGithubRepos = (username) => {
  return useQuery({
    queryKey: ["repos", username],
    queryFn: async () => {
      const res = await githubApi.get(`/users/${username}/repos`, {
        params: {
          per_page: 100,
          sort: "updated",
        },
      });

      return res.data;
    },
    enabled: !!username,
    staleTime: 5 * 60 * 1000,
  });
};
