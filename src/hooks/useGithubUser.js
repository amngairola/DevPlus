import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/githubServices";
import githubApi from "../api/github";

export const useGithubUser = (username) => {
  return useQuery({
    queryKey: ["profile", username],
    queryFn: async () => {
      const [userRes, repoRes] = await Promise.all([
        getUser(username),
        githubApi.get(`/users/${username}/repos`, {
          params: { per_page: 100, sort: "updated" },
        }),
      ]);

      return {
        user: userRes,
        repos: repoRes.data,
      };
    },
    enabled: !!username,
    suspense: true,
    staleTime: 5 * 60 * 1000,
  });
};
