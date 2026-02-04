import { useState, useEffect } from 'react';
import { personalInfo } from '../data';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

interface UseGitHubReturn {
  repos: GitHubRepo[];
  user: GitHubUser | null;
  loading: boolean;
  error: string | null;
}

export const useGitHub = (): UseGitHubReturn => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      const username = personalInfo.githubUsername;
      
      if (!username || username === 'your-github-username') {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // Fetch user data and repos in parallel
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`),
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error('Failed to fetch GitHub data');
        }

        const userData: GitHubUser = await userResponse.json();
        const reposData: GitHubRepo[] = await reposResponse.json();

        // Filter out forks and sort by stars
        const filteredRepos = reposData
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);

        setUser(userData);
        setRepos(filteredRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return { repos, user, loading, error };
};
