import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/githubServices";

export const useGithubUser = (username) => {
  return useQuery({
    queryKey: ["user", username],
    queryFn: () => getUser(username),
    enabled: !!username,
    staleTime: 5 * 60 * 1000,
  });
};
