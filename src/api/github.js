import axios from "axios";
import RateLimitError from "../errors/RateLimitError";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  timeout: 10000,
});

githubApi.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_GH_TOKEN;

  if (token) config.headers.Authorization = `Bearer ${token}`;

  config.headers.Accept = "application/vnd.github+json";

  return config;
});

githubApi.interceptors.response.use(
  (res) => {
    const remaning = res.headers["x-ratelimit-remaining"];

    if (remaning === "0") {
      throw new RateLimitError("GitHub API limit exceeded.");
    }

    return res;
  },
  (err) => Promise.reject(err)
);

export default githubApi;
