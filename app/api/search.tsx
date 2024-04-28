import { Octokit } from '@octokit/core';

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

export async function getRepos(query?: string) {
  if (!query) {
    return;
  }
  const { data } = await octokit.request('GET /search/repositories', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github+json',
    },
    q: query,
  });

  return { data };
}
