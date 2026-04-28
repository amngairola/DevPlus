import { useQuery } from "@tanstack/react-query";

import { fetchHeatmap } from "./../api/graphql";

export const useHeatMap = (username) => {
  return useQuery({
    queryKey: ["heatmap", username],
    queryFn: () => fetchHeatmap(username),
    enabled: !!username,
  });
};
