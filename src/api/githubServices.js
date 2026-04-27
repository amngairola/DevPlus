import githubApi from "./github";

//fetch user profile

export const getUser = async (username) => {
  const res = await githubApi.get(`/users/${username}`);

  return res.data;
};

// Fetch user repos

export const getRepos = async (username, page = 1) => {
  const res = await githubApi.get(`/users/${username}/repos`, {
    params: {
      per_page: 10,
      page,
      sort: "updated",
    },
  });

  return res.data;
};

// Fetch org profile

export const getOrg = async (org) => {
  const res = await githubApi.get(`/orgs/${org}`);
  return res.data;
};

// Fetch org repos
export const getOrgRepos = async (org, page = 1) => {
  const res = await githubApi.get(`/orgs/${org}/repos`, {
    params: {
      per_page: 1,
      page,
    },
  });
  return res.data;
};

export const getRepo = async (owner, repo) => {
  const res = await githubApi.get(`/repo/${owner}/${repo}`);

  return res.data;
};

export const fetchCommitActivity = async (owner, repo) => {
  const res = await githubApi.get(
    `/repos/${owner}/${repo}/stats/commit_activity`
  );

  return res.data;
};
