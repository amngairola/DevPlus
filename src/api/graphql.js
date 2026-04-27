import axios from "axios";

export const fetchHeatmap = async (username) => {
  const token = import.meta.env.VITE_GH_TOKEN;

  const query = {
    query: `
      query($login:String!) {
        user(login:$login) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                  color
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      login: username,
    },
  };

  const res = await axios.post("https://api.github.com/graphql", query, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.data.user.contributionsCollection.contributionCalendar;
};
