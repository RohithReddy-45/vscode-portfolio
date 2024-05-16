import { GithubData } from "@/types/types";

export const githubData = async () => {
  const response = await fetch(`${process.env.GITHUB_URL}`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch github data");
  }
  const data = await response.json();
  return data as GithubData;
};

export const githubRepos = async () => {
  const response = await fetch(`${process.env.GITHUB_URL}/repos`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch github data");
  }
  const data = await response.json();

  const filteredRepos = data
    .filter((repo: any) => !repo.fork && repo.homepage)
    .map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      giturl: repo.html_url,
      site: repo.homepage,
    }));

  return filteredRepos;
};
