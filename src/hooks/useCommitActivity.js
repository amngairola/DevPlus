import { useQueries, useQuery } from "@tanstack/react-query";
import { fetchCommitActivity } from "../api/githubServices";

export const useCommitActivity = (owner, repo) => {
  return useQuery({
    queryKey: ["commit", owner, repo],
    queryFn: async () => {
      const data = await fetchCommitActivity(owner, repo);

      if (!Array.isArray(data)) {
        throw new Error("Stats still generating");
      }

      return data;
    },

    enabled: !!owner && !!repo,
    retry: 3,
    retryDelay: 2000,
  });
};
